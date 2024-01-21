import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from '../app-service.service';
import * as menuDish from '../../assets/json/menuDish.json';


@Component({
  selector: 'app-caterer-details',
  templateUrl: './caterer-details.page.html',
  styleUrls: ['./caterer-details.page.scss'],
})
export class CatererDetailsPage implements OnInit {
  data: any = [];
segId= "overview";

dish: any =[];

orders: any=[];

  constructor(public loadingController:
     LoadingController, private service: 
     AppServiceService) { }

  ngOnInit() {
    this.presentLoading().then(()=>{
      this.service.getAllMenuDishes().subscribe((data)=>{
        this.data = data;
        console.log(this.data);
        this.loadingController.dismiss();
      });

      this.service.getAllDishes().subscribe((data)=>{
      this.dish = data;
      console.log(this.dish);
    });

    this.service.getAllOrders().subscribe((data)=>{
      this.orders = data;
      console.log(this.orders);
    });
    });
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: "please wait...",
    });
    await loading.present();
  }
  segmentChanged(ev: any){
    this.segId=ev.detail.value;
  }

  goToEvent(){

  
  }

  presentPopover(ev: any){

  }

}
