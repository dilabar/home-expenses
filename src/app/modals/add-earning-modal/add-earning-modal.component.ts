import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { closeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonInput,IonHeader,IonContent,IonItem,IonToolbar,IonLabel,IonButton,IonButtons,IonTitle,IonIcon,IonSelect,IonSelectOption,IonFooter,ModalController}  from '@ionic/angular/standalone'



@Component({
  selector: 'app-add-earning-modal',
  templateUrl: './add-earning-modal.component.html',
  styleUrls: ['./add-earning-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonHeader,IonContent,IonItem,IonToolbar,IonLabel,IonButton,IonTitle,
    IonInput,IonButtons,IonIcon,IonSelect,IonSelectOption,IonFooter
  ]
})
export class AddEarningModalComponent  implements OnInit {

  earningType: string = 'salary';  // Default to 'salary'
  earningSource: string = '';
  earningAmount!: number;

  constructor(private modalController: ModalController) {

     addIcons({
      'close-outline': closeOutline,
      
    });
  }
  ngOnInit(): void {
  }

  // Close modal without saving
  closeModal() {
    this.modalController.dismiss();
  }

  // Save earning and close modal
  saveEarning() {
    const newEarning = {
      type: this.earningType,
      source: this.earningSource,
      amount: this.earningAmount,
    };

    // Pass the data back and close the modal
    this.modalController.dismiss(newEarning);
  }
}
