import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from 'src/app/caterer/app-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  payment: any=[];

  constructor(public loadingController: LoadingController, private service: AppServiceService) { }

  ngOnInit() {
    this.presentLoading().then(()=>{
      this.service.getAllPayments().subscribe((data)=>{
        this.payment = data;
        console.log(this.payment);
        this.loadingController.dismiss();
      });
  });
}

    async presentLoading(){
      const loading = await this.loadingController.create({
        message: "please wait...",
      });
      await loading.present();
    }

  notificationModal(ev: any){
    console.log(ev.detail.value);
  }
  presentModal(ev: any){
    console.log(ev.detail.value);
  }

}
