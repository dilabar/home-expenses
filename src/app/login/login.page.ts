import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import { NgOtpInputModule } from 'ng-otp-input';
import { IonCard,IonFooter,IonCardContent,IonCardHeader,IonCardTitle, IonHeader,IonInput, IonContent, IonItem, IonToolbar, IonLabel, IonButton, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCard,IonFooter,IonCardContent,IonCardHeader,IonCardTitle,IonHeader, IonInput,IonContent, IonItem, IonToolbar, IonLabel, IonButton, IonTitle, CommonModule, FormsModule, ReactiveFormsModule, NgOtpInputModule]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  pin: string | null = null;
  storedEmail: any;
  username!:string
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) {
    this.loginForm = this.createForm();
  }

  ngOnInit() {
    this.checkStoredEmailAndPin();
  }

  ionViewWillEnter() {
    this.checkStoredEmailAndPin();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]], // PIN field
    });
  }

  private checkStoredEmailAndPin() {
    this.pin = this.authService.getPin();
    if (this.pin) {
      this.storedEmail = this.authService.getUser();
      this.username=this.storedEmail.first_name +" "+ this.storedEmail.last_name
      if (this.storedEmail?.email) {
        this.loginForm.patchValue({ email: this.storedEmail.email });
        this.loginForm.get('password')?.clearValidators(); // Clear validators
        this.loginForm.updateValueAndValidity(); // Update validity
      }
    } else {
      this.loginForm.get('pin')?.clearValidators(); // Clear validators
      this.loginForm.updateValueAndValidity(); // Update validity
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, pin } = this.loginForm.value;

      if (this.pin) {
        // If PIN is set, use stored email
        if (!this.storedEmail.email) {
          this.presentToast('Email not found. Please log in with email and password.');
          return;
        }

        this.authService.login(email, undefined, pin).subscribe(res => {
          if (res.status) {
            this.router.navigate(['/tabs']);
          } else {
            this.presentToast('Login with PIN failed. Please try again.');
          }
        });
      } else {
        // No PIN set, login with email and password
        this.authService.login(email, password).subscribe(res => {
          if (res) {
            this.router.navigate(['/create-pin']);
          } else {
            this.presentToast('Login failed. Please check your credentials.');
          }
        });
      }
    }
  }

  onOtpComplete(otp: string) {
    console.log('OTP Submitted:', otp);
    this.loginForm.patchValue({ pin: otp });
    this.loginForm.get('pin')?.updateValueAndValidity(); // Ensure the form control is updated
 
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }
}
