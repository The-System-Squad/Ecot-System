import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderlhistoryPageRoutingModule } from './orderlhistory-routing.module';

import { OrderlhistoryPage } from './orderlhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderlhistoryPageRoutingModule
  ],
  declarations: [OrderlhistoryPage]
})
export class OrderlhistoryPageModule {}
