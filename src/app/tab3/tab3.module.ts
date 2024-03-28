import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { AddressPage } from './address/address.page';
import { OrdersPage } from './orders/orders.page';
import { MaterialModule } from '../shared/material.module';
import { OrderHistoryPage } from './order-history/order-history.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    Tab3Page,
    AddressPage,
    OrdersPage,
    OrderHistoryPage
  ]
})
export class Tab3PageModule {}
