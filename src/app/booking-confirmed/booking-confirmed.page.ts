import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-booking-confirmed',
  templateUrl: './booking-confirmed.page.html',
  styleUrls: ['./booking-confirmed.page.scss'],
})
export class BookingConfirmedPage implements OnInit {

  constructor(private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }
 dismiss(){
   this.modalController.dismiss();
 }  
  tabs() {
    this.modalController.dismiss();  
    this.navCtrl.navigateRoot(['./tabs']);
  } 
    
}
