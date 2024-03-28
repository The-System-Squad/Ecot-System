import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatTab3PageRoutingModule } from './cat-tab3-routing.module';

import { CatTab3Page } from './cat-tab3.page';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatTab3PageRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CatTab3Page,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatTab3PageModule {}
