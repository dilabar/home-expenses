import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';
import { IonToolbar,IonButtons,IonButton,IonTitle,IonContent,ModalController,IonIcon,
  IonHeader,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonRefresher,IonRefresherContent,
  IonFab,IonFabButton,IonBackButton


 } from '@ionic/angular/standalone'; 
import { AddEarningModalComponent } from 'src/app/modals/add-earning-modal/add-earning-modal.component';
import { EarningService } from 'src/app/services/earning.service';
import { addIcons } from 'ionicons';
import { home, walletOutline, add } from 'ionicons/icons';



@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.page.html',
  styleUrls: ['./earnings.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonIcon,
    IonToolbar,IonButtons,IonButton,IonTitle,IonContent,IonHeader,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonRefresher,IonRefresherContent,
    IonFab,IonFabButton,IonBackButton
  ]
})
export class EarningsPage implements OnInit {

  salarySource!: string;
  salaryAmount!: number;
  freelanceSource!: string;
  freelanceAmount!: number;
  salaryEarnings:any[]=[];
  freelanceEarnings:any[]=[];
  filteredEarnings:any[]=[];
  selectedMonth!: string;
  months = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ];

  constructor(private expenseService: ExpenseService,private earningservice:EarningService,private modalController: ModalController,) {
    addIcons({
      'home': home,
      'wallet-outline': walletOutline,
      'add':add
    });
  }
  ngOnInit(): void {
    this.loadEarnings();
  }

  ionViewWillEnter() {
    this.loadEarnings();
  }
   loadEarnings() {
    // Default to the current month
    this.earningservice.getEarnings().subscribe((resp:any)=>{
      if(resp.status){
        this.salaryAmount=resp.salary_total;
        this.freelanceAmount=resp.freelance_total;
      }
      
    })
    const currentMonth = new Date().toISOString().slice(5, 7);
    this.selectedMonth = currentMonth;
  
    // Filter the earnings by the default month
    this.filterEarningsByMonth();
  }



  // Method to handle month selection change
   filterEarningsByMonth() {
    // console.log('cg');
    
    // const allEarnings = [...this.salaryEarnings, ...this.freelanceEarnings];
    
    // this.filteredEarnings = allEarnings.filter(earning => {
    //   const earningMonth = new Date(earning.date).toISOString().slice(5, 7);
    //   return earningMonth === this.selectedMonth;
    // });
  }
  
  // Open the add earning modal
  async openAddEarningModal() {
    const modal = await this.modalController.create({
      component: AddEarningModalComponent
    });

    await modal.present();

    // Handle data returned from modal when it is dismissed
    const { data } = await modal.onWillDismiss();

    if (data) {
   
        await this.earningservice.addEarning(data,true).subscribe((res:any)=>{
          if(res.status){
              console.log(res);
              this.loadEarnings();
              
          }
        });
      
      
    }
  }
  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.loadEarnings();
      event.target.complete();
    }, 2000);
  }
}
