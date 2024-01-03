import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OrdermenuPage } from '../popup/ordermenu/ordermenu.page';

@Component({
  selector: 'app-orderlhistory',
  templateUrl: './orderlhistory.page.html',
  styleUrls: ['./orderlhistory.page.scss'],
})
export class OrderlhistoryPage implements OnInit {

  orders = [{
    "date": "Today, 17 November 2023",
    "order": [{
      "id": "01",
      "image": "001.JPG",
      "title": "Beef Stew",
      "amount": "35.00",
      "transId": "58745212",
      "time": "20 Min",
      "status": "CONFIRM", 
    },
  {
    "id": "02",
      "image": "002.JPG",
      "title": "Chicken Stew",
      "amount": "32.00",
      "transId": "45784125",
      "time": "45 Min",
      "status": "CANCELLED", 
  },
  {
    "id": "03",
      "image": "003.JPG",
      "title": "Chicken dust",
      "amount": "30.00",
      "transId": "523081980",
      "time": "10 Min",
      "status": "CONFIRMED", 
  }]
},
{
  "date": "18 November 2023",
  "order": [{
    "id": "04",
    "image": "003.JPG",
    "title": "Beef Stew",
    "amount": "35.00",
    "transId": "58745212",
    "time": "23 Min",
    "status": "CONFIRM", 
},
{
  "id": "05",
    "image": "004.JPG",
    "title": "Chicken stew",
    "amount": "32.00",
    "transId": "45784125",
    "time": "30 Min",
    "status": "CANCELLED", 
},
{
  "id": "06",
    "image": "005.JPG",
    "title": "Chicken dust",
    "amount": "30.00",
    "transId": "23081980",
    "time": "05 Min",
    "status": "CONFIRM", 
}
 
]
},
  {
  "date": "19 Nov 2023",
  "order": [{
    "id": "07",
      "image": "006.JPG",
      "title": "Beef Stew",
      "amount": "35.00",
      "transId": "58745212",
      "time": "26 Min",
      "status": "CONFIRM", 
  },
  {
    "id": "08",
      "image": "007.JPG",
      "title": "Chicken stew",
      "amount": "32.00",
      "transId": "45784125",
      "time": "1 hour",
      "status": "CANCELLED", 
  },
  {
    "id": "03",
      "image": "008.JPG",
      "title": "Chicken dust",
      "amount": "30.00",
      "transId": "23081948",
      "time": "20 Min",
      "status": "CANCELLED", 
  }
]  
}
  ]
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  segmentChanged(ev: any){
    console.log(ev.detail.value);
  }
  async presentPopover(ev: any){
    const popover = await this.popoverController.create({
      component: OrdermenuPage,
      event: ev,
      mode: 'ios',
      translucent: true
    });
    await popover.present();
  }

}
