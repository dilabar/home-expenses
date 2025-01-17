import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { IonInput,IonHeader,IonContent,IonItem,IonToolbar,IonLabel,IonButton,IonTitle}  from '@ionic/angular/standalone'


@Component({
  selector: 'app-create-pin',
  templateUrl: './create-pin.page.html',
  styleUrls: ['./create-pin.page.scss'],
  standalone: true,
  imports: [IonInput,IonHeader,IonContent,IonItem,IonToolbar,IonLabel,IonButton,IonTitle, CommonModule, FormsModule]
})
export class CreatePinPage implements OnInit {
  pin: string = '';
  confirmPin: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {

  }
   createPin() {
    if (this.pin === this.confirmPin) {
       this.authService.setPin(this.pin).subscribe(res=>{
        if(res.status){
      
            this.router.navigate(['tabs']); // Redirect to main application
          
        }
      }); // Implement this in your AuthService
    
    } else {
      alert('PINs do not match!');
    }
  }



}
