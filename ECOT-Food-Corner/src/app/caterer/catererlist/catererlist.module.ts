import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatererlistPageRoutingModule } from './catererlist-routing.module';

import { CatererlistPage } from './catererlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatererlistPageRoutingModule
  ],
  declarations: [CatererlistPage]
})
export class CatererlistPageModule {}
