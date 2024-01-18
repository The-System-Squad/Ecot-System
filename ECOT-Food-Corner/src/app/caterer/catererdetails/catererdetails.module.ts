import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatererdetailsPageRoutingModule } from './catererdetails-routing.module';

import { CatererdetailsPage } from './catererdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatererdetailsPageRoutingModule
  ],
  declarations: [CatererdetailsPage]
})
export class CatererdetailsPageModule {}
