import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AccountService } from '../services/account.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { home, locateOutline, logOutOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage implements OnInit {
  totalavl!: number;
  totalearning!: number;
  totalexpenses!: number;
  username!:string;
  greeting!:string;
  constructor(private accountService:AccountService,private auth:AuthService,private toastController: ToastController,
    private router: Router) {
      addIcons({
        'home': home,
        'log-out-outline':logOutOutline
        
      });
    }
  ngOnInit(): void {
   this.loadData();
  }
  loadData(){
    this.accountService.getAccount().subscribe((res:any)=>{
      if(res.status){
        this.greeting=res.greeting;
        this.username=res.user_name;
        this.totalexpenses=res.total_expenses;
        this.totalearning=res.total_earnings;
        this.totalavl=res.total_available_balance
      }
    })
  }
     logout(){
      this.auth.logout().subscribe((res:any)=>{
        if(res.status){
          this.presentToast(res.message)

        }
        else{
          this.presentToast(res.message)


        }
      })
      this.router.navigate(['/login']);

     }
     handleRefresh(event:any) {
      setTimeout(() => {
        // Any calls to load data go here
        this.loadData();
        event.target.complete();
      }, 2000);
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
