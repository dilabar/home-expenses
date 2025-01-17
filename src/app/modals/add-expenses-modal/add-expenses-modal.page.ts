import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';
import { closeOutline, walletOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonInput,IonHeader,IonContent,IonItem,IonToolbar,IonLabel,IonButton,IonButtons,IonTitle,IonIcon,IonSelect,IonSelectOption,IonFooter,ModalController}  from '@ionic/angular/standalone'



@Component({
  selector: 'app-add-expenses-modal',
  templateUrl: './add-expenses-modal.page.html',
  styleUrls: ['./add-expenses-modal.page.scss'],
  standalone: true,
  imports: [IonHeader,IonInput,IonContent,IonItem,IonToolbar,IonLabel,IonButton,IonTitle,
    IonButtons,IonIcon,IonSelect,IonSelectOption,IonFooter, CommonModule, FormsModule]
})
export class AddExpensesModalPage implements OnInit {
  category_id: any;
  amount: any;
  description!:string;
  categories: any[]=[];

  constructor(private modalController: ModalController,private expenseService:ExpenseService) { 
    addIcons({
      'wallet-outline': walletOutline,
      'close-outline':closeOutline
      
    });
  }

  ngOnInit() {
    this.loaddata();
  }
  loaddata(){
    this.expenseService.getCategory().subscribe((res:any)=>{
      if(res.status){
        this.categories=res.category;
      }
    })
  }
 // Close modal without saving
 closeModal() {
  this.modalController.dismiss();
}

// Save earning and close modal
saveExp() {
  const newExpenses = {
    category_id: this.category_id,
    amount: this.amount,
    description:this.description
  };

  // Pass the data back and close the modal
  this.modalController.dismiss(newExpenses);
}
}
