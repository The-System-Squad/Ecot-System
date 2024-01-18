import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PersonMenuComponent } from 'src/app/pages/component/person-menu/person-menu.component';
import { PersonComponent } from 'src/app/pages/component/person/person.component';



@Component({
  selector: 'app-catererlist',
  templateUrl: './catererlist.page.html',
  styleUrls: ['./catererlist.page.scss'],
})
export class CatererlistPage implements OnInit {

  dish = [
    { 
      "image_id": "01",
      "image": "001.JPG"
    },
    { 
      "image_id": "01",
      "image": "002.JPG"
    },
    { 
      "image_id": "01",
      "image": "003.JPG"
    },
    { 
      "image_id": "01",
      "image": "001.JPG"
    },
    { 
      "image_id": "01",
      "image": "002.JPG" 
    },
    { 
      "image_id": "01",
      "image": "002.JPG" 
    }
]

dish1 = [
  { 
    "image_id": "01",
    "image": "images (2).jpeg"
  },
  { 
    "image_id": "02",
    "image": "images.jpeg"
  },
  { 
    "image_id": "03",
    "image": "Moroccan252520Beef252520Stew252520above.jpg"
  },
  { 
    "image_id": "04",
    "image": "pap-and-chicken-stew-recipe-main-photo.jpg"
  },
  { 
    "image_id": "05",
    "image": "vYBCXD4T530vnbze9fy6x9GjRisL81dmULtwd6kn.jpg" 
  },
  { 
    "image_id": "06",
    "image": "002.JPG" 
  }
]

dish2 = [
  { 
    "image_id": "01",
    "image": "chips.jpg"
  },
  { 
    "image_id": "02",
    "image": "Easy-Beef-Stew-with-Rice-3-4-034-1-1468x980.jpg"
  },
  { 
    "image_id": "03",
    "image": "f67e63_c5a39d7fcf744883b3fa4cc66446f2a4_mv2-840x525.jpg"
  },
  { 
    "image_id": "04",
    "image": "images (1).jpeg"
  },
  { 
    "image_id": "05",
    "image": "007.JPG" 
  },
  { 
    "image_id": "06",
    "image": "air-fryer-hot-dogs-4802499-07-b327e219937c429a81efaf61519724a5.jpg" 
  }
]
  constructor(private modalCtrl: ModalController, private popoverControl : PopoverController) { }

  ngOnInit() {
  }
  notificationModal(ev: any){

  }
async presentModal(ev: any){
  const modal = await this.modalCtrl.create({
    component:PersonComponent,
    showBackdrop: true,
    backdropDismiss: true,
    animated: true,
    mode: 'ios',
    keyboardClose: true,
    componentProps: {
      "name": "Sibongimphilo",
      "city": "Mbabane"

    },
    cssClass: "my-modal"
  });
  return await modal.present()

}
async presentPopover(ev: any){
const popover=await this.popoverControl.create({
  component: PersonMenuComponent,
  event:ev,
  mode: 'ios',
  translucent:true
})
await popover.present();
}
}
