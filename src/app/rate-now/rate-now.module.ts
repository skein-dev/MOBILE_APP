import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { RateNowPageRoutingModule } from './rate-now-routing.module';

import { RateNowPage } from './rate-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    RateNowPageRoutingModule
  ],
  declarations: [RateNowPage]
})
export class RateNowPageModule {}
