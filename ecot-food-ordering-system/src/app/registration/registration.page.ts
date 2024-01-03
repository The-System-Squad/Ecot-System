import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'page-register',
  templateUrl: 'registration.page.html',
  styleUrls: ['./registration.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterModule, CommonModule, FormsModule]
})
export class RegistrationPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };

  constructor() { }

  public register() {
    
    }
  }

  
  
