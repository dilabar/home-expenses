import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class LoginPage implements OnInit {



  loginForm: FormGroup;
  pin!: string | null;
  storedEmail:any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]], // PIN field
    });
  }

  ngOnInit() {
    this.pin =this.authService.getPin()
    if(this.pin !='' && this.pin !=null){
      this.storedEmail=this.authService.getUser()
      if(this.storedEmail.email !=null && this.storedEmail.email !=''){
        this.loginForm.patchValue({
          email:this.storedEmail.email
        })
      // Remove validators from the password control
      this.loginForm.get('password')?.clearValidators(); // Clear validators
      this.loginForm.updateValueAndValidity(); // Update validity
      }
    
    }
    else{
            // Remove validators from the password control
            this.loginForm.get('pin')?.clearValidators(); // Clear validators
            this.loginForm.updateValueAndValidity(); // Update validity
    }
  }
  ionViewWillEnter() {
    // This method will be called every time the page is about to enter and become the active page.
    this.pin = this.authService.getPin();
    if (this.pin !== '' && this.pin !== null) {
      this.storedEmail = this.authService.getUser();
      if (this.storedEmail.email != null && this.storedEmail.email !== '') {
        this.loginForm.patchValue({
          email: this.storedEmail.email
        });
        // Remove validators from the password control
        this.loginForm.get('password')?.clearValidators(); // Clear validators
        this.loginForm.updateValueAndValidity(); // Update validity
      }
    } else {
      // Remove validators from the PIN control
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
     
         this.authService.login(email,undefined, pin).subscribe(res=>{
          if (res.status) {
            this.router.navigate(['/tabs']);
          } else {
            this.presentToast('Login with PIN failed. Please try again.');
          }
        });
      }
      else {
        // No PIN set, login with email and password
   
        this.authService.login(email, password).subscribe(res => {
          if (res) {
            this.router.navigate(['/create-pin']);
          } else {
            this.presentToast('Login failed. Please check your credentials.');
          }
        });
      }
        // Handle successful login, e.g., navigate to home page
     
     
    }
  }
  // onOtpComplete(otp: any) {
  //   console.log('OTP Submitted:', otp);
  //   // Handle OTP submission logic here
  //   this.loginForm.patchValue({ pin: otp });
  // }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

}
