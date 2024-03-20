import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPaymentPageRoutingModule } from './view-payment-routing.module';

import { ViewPaymentPage } from './view-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPaymentPageRoutingModule
  ],
  declarations: [ViewPaymentPage]
})
export class ViewPaymentPageModule {}
