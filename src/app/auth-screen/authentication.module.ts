import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignUpPage } from './sign-up/sign-up.page';
import { SignInPage } from './sign-in/sign-in.page';
import { RouterModule } from '@angular/router';
import { ErrorHandlerService } from '../shared/error-handler.service';



@NgModule({
  declarations: [SignUpPage,SignInPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: SignInPage },
      { path: 'register', component: SignUpPage }
     
    ])
  ]
})
export class AuthenticationModule { }
