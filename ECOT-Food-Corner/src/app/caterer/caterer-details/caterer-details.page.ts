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
  user: any=[];

  constructor(public loadingController:
     LoadingController, private service: 
     AppServiceService) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllMenuDishes().subscribe((res) => 
      { 
        this.user = res.document.records;
        console.log(this.user);
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

}
