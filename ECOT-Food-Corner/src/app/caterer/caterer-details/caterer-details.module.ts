import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatererDetailsPageRoutingModule } from './caterer-details-routing.module';

import { CatererDetailsPage } from './caterer-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatererDetailsPageRoutingModule
  ],
  declarations: [CatererDetailsPage]
})
export class CatererDetailsPageModule {}
