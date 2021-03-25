import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { BookAppointmentPageRoutingModule } from './book-appointment-routing.module';

import { BookAppointmentPage } from './book-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    BookAppointmentPageRoutingModule
  ],
  declarations: [BookAppointmentPage]
})
export class BookAppointmentPageModule {}
