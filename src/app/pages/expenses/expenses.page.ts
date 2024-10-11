import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,ModalController } from '@ionic/angular';
import { ExpenseService } from 'src/app/services/expense.service';
import { AddExpensesModalPage } from 'src/app/modals/add-expenses-modal/add-expenses-modal.page';
import { addIcons } from 'ionicons';
import { home, walletOutline, add, pricetagOutline, cashOutline, swapHorizontalOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ExpensesPage implements OnInit {
  expensesList:any[]=[]
currentMonth= new Date();
  totalExpenses!: number;
  constructor(private expensesService:ExpenseService,private modalController: ModalController) { 
    addIcons({
      'home': home,
      'wallet-outline': walletOutline,
      'add':add,
      'pricetag-outline':pricetagOutline,
      'cash-outline':cashOutline,
      'swap-horizontal-outline':swapHorizontalOutline,
      'settings-outline':settingsOutline
    });
  }

  ngOnInit() {
    this.loadExpenses()
  }
  loadExpenses(){
    this.expensesService.getExpenses().subscribe((res:any)=>{
      if(res.status){
        this.expensesList=res.categorized_expenses
        this.totalExpenses=res.total_expenses

      }
    })
  }

  // Open the add expenses modal
  async openAddEXpensesModal() {
    const modal = await this.modalController.create({
      component: AddExpensesModalPage
    });

    await modal.present();

    // Handle data returned from modal when it is dismissed
    const { data } = await modal.onWillDismiss();

    if (data) {
   
        await this.expensesService.addExpense(data,true).subscribe((res:any)=>{
          if(res.status){
              console.log(res);
              
          }
        });
      
      
    }
  }
  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.loadExpenses();
      event.target.complete();
    }, 2000);
  }
}
