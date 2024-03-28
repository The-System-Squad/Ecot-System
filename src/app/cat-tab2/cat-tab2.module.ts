import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatTab2PageRoutingModule } from './cat-tab2-routing.module';

import { CatTab2Page } from './cat-tab2.page';
import { MaterialModule } from '../shared/material.module';
import { AddItemPage } from './add-item/add-item.page';
import { UploadComponent } from '../shared/upload/upload.component';
import { UpdateItemPage } from './update-item/update-item.page';
import { AddPicPage } from '../cat-tab3/add-pic/add-pic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatTab2PageRoutingModule,
    MaterialModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CatTab2Page,AddItemPage,UpdateItemPage, UploadComponent,AddPicPage]
})
export class CatTab2PageModule {}
