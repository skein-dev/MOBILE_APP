import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { BookingConfirmedPageRoutingModule } from './booking-confirmed-routing.module';

import { BookingConfirmedPage } from './booking-confirmed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    BookingConfirmedPageRoutingModule
  ],
  declarations: [BookingConfirmedPage]
})
export class BookingConfirmedPageModule {}
