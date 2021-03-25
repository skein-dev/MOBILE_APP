import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { ModalController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig ,private route: Router, private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

 my_profile() {
    this.route.navigate(['./my-profile']);
  }
 my_reviews() {
    this.route.navigate(['./my-reviews']);
  } 
 terms_conditions() {
    this.route.navigate(['./terms-conditions']);
  } 
 connect_us() {
    this.route.navigate(['./connect-us']);
  }  
 select_language() {
    this.route.navigate(['./select-language']);
  } 
 phone_number() {
    this.navCtrl.navigateRoot(['./phone-number']);
  }   
  
 developed_by() {
    window.open("https://opuslab.works/", '_system', 'location=no');
  }
  buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  }    
}
