import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, walletOutline, add, pizza, cash } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,IonicModule,RouterModule]
})
export class TabsPage implements OnInit {

  constructor() {
    addIcons({
      'home': home,
      'wallet-outline': walletOutline,
      'add':add,
      'pizza':pizza,
      'cash':cash
    });
   }

  ngOnInit() {
  }

}
