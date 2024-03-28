import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatTab1PageRoutingModule } from './cat-tab1-routing.module';

import { CatTab1Page } from './cat-tab1.page';
import { OrderDetailsPage } from './order-details/order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatTab1PageRoutingModule
  ],
  declarations: [CatTab1Page,OrderDetailsPage]
})
export class CatTab1PageModule {}
