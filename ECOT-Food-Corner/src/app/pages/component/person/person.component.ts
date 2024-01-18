import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent  implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {

  }
  
  dismiss(){

    this.modalCtrl.dismiss({

      "name": "Mphilo",
      "City": "Mbabane "
    })

  }

}
