import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { AppointmentInfoPageRoutingModule } from './appointment-info-routing.module';

import { AppointmentInfoPage } from './appointment-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    AppointmentInfoPageRoutingModule
  ],
  declarations: [AppointmentInfoPage]
})
export class AppointmentInfoPageModule {}
