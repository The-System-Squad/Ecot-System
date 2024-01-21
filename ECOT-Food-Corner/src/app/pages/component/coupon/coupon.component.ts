import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent  implements OnInit {
  couponCode: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss({
      "code": "",
    });
  }

  apply() {
    this.modalCtrl.dismiss({
      "code": this.couponCode,
    });
  }

}
