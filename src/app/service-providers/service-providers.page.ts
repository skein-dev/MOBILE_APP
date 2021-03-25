import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.page.html',
  styleUrls: ['./service-providers.page.scss'],
})
export class ServiceProvidersPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
    
 map_view() {
    this.route.navigate(['./map-view']);
  } 
 salon_profile() {
    this.route.navigate(['./salon-profile']);
  }     
}
