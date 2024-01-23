import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  setting:any ={
    appSetting: true,
    sms: true,
    offer: true,
    reminder: '',
    touchId: true,
    faceId: true,
  }

  constructor() { }

  ngOnInit() {
  }
  notificationModal(ev: any){

  }
  presentModal(ev: any){

  }
  changeApp(ev: any){
    this.setting.appsetting=ev.detail.checked;
    console.log(this.setting);

  }
  changeSms(ev: any){
    this.setting.sms=ev.detail.checked;
    console.log(this.setting);
  }
  changeOffer(ev: any){
    this.setting.offer=ev.detail.value;
    console.log(this.setting);
  }
  changeReminder(ev: any){
    this.setting.reminder=ev.detail.value;
    console.log(this.setting);
  }
  changetouchId(ev: any){
    this.setting.touchId=ev.detail.value;
    console.log(this.setting);
  }
  changefaceId(ev: any){
    this.setting.faceId=ev.detail.value;
    console.log(this.setting);

  }
  

}
