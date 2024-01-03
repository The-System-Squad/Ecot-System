import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdermenuPageRoutingModule } from './ordermenu-routing.module';

import { OrdermenuPage } from './ordermenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdermenuPageRoutingModule
  ],
  declarations: [OrdermenuPage]
})
export class OrdermenuPageModule {}
