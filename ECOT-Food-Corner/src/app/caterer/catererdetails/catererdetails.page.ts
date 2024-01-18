import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-catererdetails',
  templateUrl: './catererdetails.page.html',
  styleUrls: ['./catererdetails.page.scss'],
})
export class CatererdetailsPage implements OnInit {

  constructor(public loadingController:
    LoadingController, private service: 
    AppServiceService) { }

  ngOnInit() {
  }

}
