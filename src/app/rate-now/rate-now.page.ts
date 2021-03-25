import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-now',
  templateUrl: './rate-now.page.html',
  styleUrls: ['./rate-now.page.scss'],
})
export class RateNowPage implements OnInit {

  ratingIcon1 = false;
  ratingIcon2 = false;
  ratingIcon3 = false;
  ratingIcon4 = false;
  ratingIcon5 = false;

  constructor() { }

  ngOnInit() {
  }
 toggleRatingIcon1(){
   this.ratingIcon1 = !this.ratingIcon1;
   } 
 toggleRatingIcon2(){
   this.ratingIcon2 = !this.ratingIcon2;
   }
 toggleRatingIcon3(){
   this.ratingIcon3 = !this.ratingIcon3;
   }
 toggleRatingIcon4(){
   this.ratingIcon4 = !this.ratingIcon4;
   } 
 toggleRatingIcon5(){
   this.ratingIcon5 = !this.ratingIcon5;
   }
}
