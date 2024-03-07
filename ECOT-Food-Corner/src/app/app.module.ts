import { LOCALE_ID, NgModule } from '@angular/core';
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
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { HotToastModule} from '@ngneat/hot-toast'


@NgModule({
  declarations: [AppComponent, PersonComponent,PersonMenuComponent,AddItemsComponent,CouponComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule, ReactiveFormsModule, provideFirebaseApp(()=> initializeApp(environment.firebase)),provideAuth(()=>getAuth()),HotToastModule.forRoot()],
  providers: [ { provide: LOCALE_ID, useValue: "en-US" },{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, AppServiceService, FormControl, Validators],
  bootstrap: [AppComponent],
})
export class AppModule {}
