import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-info',
  templateUrl: './appointment-info.page.html',
  styleUrls: ['./appointment-info.page.scss'],
})
export class AppointmentInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 book_appointment() {
    this.route.navigate(['./book-appointment']);
  } 
 salon_profile() {
    this.route.navigate(['./salon-profile']);
  } 
}
