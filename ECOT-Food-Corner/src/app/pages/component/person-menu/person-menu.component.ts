import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-person-menu',
  templateUrl: './person-menu.component.html',
  styleUrls: ['./person-menu.component.scss'],
})
export class PersonMenuComponent  implements OnInit {

  constructor(private popoverControl : PopoverController) { }

  ngOnInit() {}

  close(){
    this.popoverControl.dismiss();

  }
}
