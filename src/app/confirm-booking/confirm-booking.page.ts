import { Component, OnInit } from '@angular/core';
import { BookingConfirmedPage } from '../booking-confirmed/booking-confirmed.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.page.html',
  styleUrls: ['./confirm-booking.page.scss'],
})
export class ConfirmBookingPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  booking_confirmed() {
    this.modalController.create({ component: BookingConfirmedPage }).then((modalElement) => modalElement.present());
  }  
} 