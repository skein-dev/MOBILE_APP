import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-salon-profile',
  templateUrl: './salon-profile.page.html',
  styleUrls: ['./salon-profile.page.scss'],
})
export class SalonProfilePage implements OnInit {
 tab: string = "services";
 services_tab: string = "All";
 showToolbar = false; 
  constructor(private route: Router) { }

  ngOnInit() {
  }

 book_appointment() {
    this.route.navigate(['./book-appointment']);
  }
 onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
     const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >=300;
     }
  }     
}
