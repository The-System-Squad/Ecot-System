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
  data = [{ 
    "id": "01",
    "image": "images (2).jpeg",
    "title": "Chicken & pap "
  },
  { 
    "id": "02",
    "image": "images.jpeg",
    "title": "Beef & pap"
  },
  { 
    "id": "03",
    "image": "Moroccan252520Beef252520Stew252520above.jpg",
    "title": "Rice & mince"
  },
  { 
    "id": "04",
    "image": "pap-and-chicken-stew-recipe-main-photo.jpg",
    "title": "Chichen & pap"
  },
  { 
    "id": "05",
    "image": "vYBCXD4T530vnbze9fy6x9GjRisL81dmULtwd6kn.jpg",
    "title": "Potato chips" 
  },
  { 
    "id": "06",
    "image": "002.JPG",
    "title": "Chicken stew"
  }
];
segId= "overview";

orders = [{
  "date": "Today, 17 November 2023",
  "order": [{
    "id": "01",
    "image": "images (2).jpeg",
    "title": "Chicken & pap ",
    "amount": "35.00",
    "transId": "58745212",
    "time": "20 Min",
    "status": "CONFIRM", 
  },
{
  "id": "02",
  "image": "images.jpeg",
  "title": "Beef & pap",
    "amount": "32.00",
    "transId": "45784125",
    "time": "45 Min",
    "status": "CANCELLED", 
},
{
  "id": "03",
  "image": "Moroccan252520Beef252520Stew252520above.jpg",
  "title": "Rice & mince",
    "amount": "30.00",
    "transId": "523081980",
    "time": "10 Min",
    "status": "CONFIRMED" 
},
{
  "id": "04",
  "image": "pap-and-chicken-stew-recipe-main-photo.jpg",
    "title": "Chichen & pap",
  "amount": "35.00",
  "transId": "58745212",
  "time": "23 Min",
  "status": "CONFIRM", 
},
{
"id": "05",
"image": "vYBCXD4T530vnbze9fy6x9GjRisL81dmULtwd6kn.jpg",
"title": "Potato chips",
  "amount": "32.00",
  "transId": "45784125",
  "time": "30 Min",
  "status": "CANCELLED", 
},
{
"id": "06",
"image": "002.JPG",
"title": "Chicken stew",
  "amount": "30.00",
  "transId": "23081980",
  "time": "05 Min",
  "status": "CONFIRM", 
}

]

}
]

  constructor(public loadingController:
     LoadingController, private service: 
     AppServiceService) { }

  ngOnInit() {
    
    
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
