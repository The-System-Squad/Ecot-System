import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-ordermenu',
  templateUrl: './ordermenu.page.html',
  styleUrls: ['./ordermenu.page.scss'],
})
export class OrdermenuPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
close(){
      this.popoverController.dismiss();
}
}
