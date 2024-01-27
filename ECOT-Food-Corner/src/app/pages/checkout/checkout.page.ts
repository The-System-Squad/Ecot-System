import { Component, OnInit } from '@angular/core';
import { PersonComponent } from '../component/person/person.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  id;

  constructor() { }

  ngOnInit() {
  }
  notificationModal(ev: any){

  }
presentModal(ev:any){

}
changeMethod(val){
  this.id = val;
}

}
