import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CatererDto } from 'src/app/models/caterer';

@Component({
  selector: 'app-caterers',
  templateUrl: './caterers.page.html',
  styleUrls: ['./caterers.page.scss'],
})
export class CaterersPage {

  @Input() caterer?: CatererDto | any;

  
  constructor(    private router: Router,private modalController: ModalController) { }


  public redirectToDetails = async (id: string) => {
    if (this.modalController) {
      const topModal = await this.modalController.getTop();
      if (topModal) {
        this.modalController.dismiss();
      }
    }
    let url: string = `/tabs/tab1/caterer/${id}`;
    this.router.navigate([url]);
  }

}
