import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatererDto } from '../models/caterer';
import { AuthenticationService } from '../shared/authentication.service';
import { RepositoryService } from '../shared/repository.service';
import { Router } from '@angular/router';
import { AddressPage } from './address/address.page';
import { ModalController } from '@ionic/angular';
import { MatDialog } from '@angular/material/dialog';
import { OrdersPage } from './orders/orders.page';
import { OrderHistoryPage } from './order-history/order-history.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  caterer : CatererDto |any;
  errorMessage: string = '';
  private dialogConfig: any;
  public showError?: boolean;
  private refreshSubscription!: Subscription;

  isUserAuthenticated?: boolean;
  email?: any
  userFirstName?: any
  userLastName?: any
  
    constructor(    
      private repoService: RepositoryService,
      private authService: AuthenticationService,
      private router: Router,
      private modalController: ModalController,
      private dialog: MatDialog,) {
        this.authService.authChanged
        .subscribe(res => {
          this.isUserAuthenticated = res;
        });
       }
       ngOnInit(): void {
        this.authService.updateuser.subscribe((res) => {
          this.Email();
          this.firstName();
          this.lastName();
        });
    
        this.Email();
        this.firstName();
        this.lastName();
    
      }

      public firstName() {
        this.userFirstName = this.authService.loadCurrentUserFirstName();
      }
      public lastName() {
        this.userLastName = this.authService.loadCurrentUserLastName();
      }
    
      public Email() {
        this.email = this.authService.loadCurrentUserEmail();
      }

    public logout = () => {
      this.authService.logout();
      this.router.navigate(["/auth/login"]);
    }
    async openAddress() {
      const modal = await this.modalController.create({
        component: AddressPage,
        
      } );
      return await modal.present();
    }

    openOrders(id: string) {

      const popup = this.dialog.open(OrdersPage, {
        width: '500px', height: '500px',
        enterAnimationDuration: '100ms',
        exitAnimationDuration: '100ms',
       data:{
        id:id
       }
      });
    }

    openHistory(id: string) {

      const popup = this.dialog.open(OrderHistoryPage, {
        width: '500px', height: '500px',
        enterAnimationDuration: '100ms',
        exitAnimationDuration: '100ms',
       data:{
        id:id
       }
      });
    }
}
