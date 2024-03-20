import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TaskComponent } from 'src/app/components/task/task.component';
import { NewTaskComponent } from 'src/app/new-task/new-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePage, TaskComponent,NewTaskComponent]
})
export class HomePageModule {}
