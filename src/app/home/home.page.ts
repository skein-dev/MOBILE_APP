import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 service_providers() {
    this.route.navigate(['./service-providers']);
  } 
 salon_profile() {
    this.route.navigate(['./salon-profile']);
  } 
 map_view() {
    this.route.navigate(['./map-view']);
  } 
}
