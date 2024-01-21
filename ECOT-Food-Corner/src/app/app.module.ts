import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonComponent } from './pages/component/person/person.component';
import { PersonMenuComponent } from './pages/component/person-menu/person-menu.component';
import { AppServiceService } from './caterer/app-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AddItemsComponent } from './pages/component/add-items/add-items.component';
import { CouponComponent } from './pages/component/coupon/coupon.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, PersonComponent,PersonMenuComponent,AddItemsComponent,CouponComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, AppServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
