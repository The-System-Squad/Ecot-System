import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  userModel = new User ( 'Mphilo', 'Shongwe', '09/01/2002' ,'Sobhuza 12',  79496307, 'mphilo@gmail.com','Mliba123' );

}

