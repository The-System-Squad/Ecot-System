import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatTabsPageRoutingModule } from './cat-tabs-routing.module';

import { CatTabsPage } from './cat-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatTabsPageRoutingModule,
  ],
  declarations: [CatTabsPage]
})
export class CatTabsPageModule {}
