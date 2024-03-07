import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatererregPageRoutingModule } from './catererreg-routing.module';

import { CatererregPage } from './catererreg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CatererregPageRoutingModule
  ],
  declarations: [CatererregPage]
})
export class CatererregPageModule {}
