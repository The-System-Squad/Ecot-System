import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { AppServiceService } from 'src/app/caterer/app-service.service';
import { AddItemsComponent } from '../pages/component/add-items/add-items.component';
import { CouponComponent } from '../pages/component/coupon/coupon.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orders: any= [];
  number = 1;
  total_amt = 0;
  totalItemPrice!: string;
  returnDataFromModal: any;
  constructor(private service: AppServiceService, public loadingController: LoadingController,private modalCtrl : ModalController,) { }


  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllMenuDishes().subscribe((data)=>{
        this.orders = data;
        console.log(this.orders);
        this.loadingController.dismiss();
        this.total();
      });
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please Wait .. ",
    });
    await loading.present();
  }
  remove(id: number) {
    console.log(id);
    if (this.orders[id].qty > 1) {
      console.log(this.orders[id].qty);
      this.orders[id].qty = this.orders[id].qty - 1;
      this.total_amt = this.total_amt - this.orders[id].amount;
      this.removeItemPrice(this.orders[id].qty,this.orders[id].amount,this.orders[id].title)
    } else {
      this.orders[id].qty = 1;
    }

  }

  add(id: number) {
    console.log(id);
    console.log(this.orders[id].qty);
    this.orders[id].qty = this.orders[id].qty + 1;
    this.total_amt = this.total_amt + this.orders[id].amount;
    this.itemPrice(this.orders[id].qty,this.orders[id].amount,this.orders[id].title)

  }
  total() {
    for (let i = 0; i < this.orders.length; i++) {
      this.total_amt = this.total_amt + this.orders[i].amount;     
    }
  }

  itemPrice(qty: number, amt: number,title: any) {
    console.log(qty,amt,title);
    this.totalItemPrice = (qty * amt).toFixed(2);
    console.log(this.totalItemPrice);   
  }

  removeItemPrice(qty: number, amt: number,title: any) {
    console.log(qty,amt,title);
    this.totalItemPrice = (qty * amt).toFixed(2);
    console.log(this.totalItemPrice);   
  }

  deleteItem(i: any) {
    console.log(i);
    this.orders = this.orders.filter((item: { id: any; }) => item.id !== i);

  }

  async editCoupon(ev: any) {
    console.log("edited");
    const modal = await this.modalCtrl.create({
      component: CouponComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      mode: 'ios',
      keyboardClose: true,
      componentProps: {
        "name": "Sibongimphilo",
        "city":"Shongwe"
      },
      cssClass: "my-modal"
    })

    modal.onDidDismiss().then((data:any) => {
      this.returnDataFromModal = data;
      console.log(this.returnDataFromModal);
    })
    return await modal.present();
  }

  async moreItems() {
    console.log("more items Added");
    const modal = await this.modalCtrl.create({
      component: AddItemsComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      mode: 'ios',
      keyboardClose: true,
      componentProps: {
       "name": "Sibongimphilo",
        "city":"Shongwe"
      },
      cssClass: "bookingmodal"
    })

    modal.onDidDismiss().then((data:any) => {
      this.returnDataFromModal = data;
      console.log(this.returnDataFromModal);
    })
    return await modal.present();
  }

  orderDetails() {
    console.log("click");
   
  }

  notificationModal(ev: any){


  }

  presentModal(ev: any){


  }
}