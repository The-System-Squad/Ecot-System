import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatererDto } from '../models/caterer';
import { ErrorHandlerService } from '../shared/error-handler.service';
import { RepositoryService } from '../shared/repository.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OrderDto } from '../models/orders';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cat-tab1',
  templateUrl: './cat-tab1.page.html',
  styleUrls: ['./cat-tab1.page.scss'],
})
export class CatTab1Page implements OnInit {
  caterer : CatererDto |any;
  errorMessage: string = '';
  private dialogConfig: any;
  public showError?: boolean;
  private refreshSubscription!: Subscription;
  orders :OrderDto[] | any;
  ordersPending :OrderDto[] | any;
  
    constructor(    
      private repoService: RepositoryService,
      private errorService: ErrorHandlerService, 
      private router: Router,
      private dataService: DataService,
      private modalController: ModalController,) {
        this.refreshSubscription = this.dataService.refreshTab1$.subscribe(() => {
          this.getCaterer();
        });
       }
  
    ngOnInit() {
      this.getCaterer();
    }
  
    private getCaterer = () =>{
    
      let apiUrl: string = `api/caterers/details`;
   
      this.repoService.getData(apiUrl)
      .subscribe(res => {
        this.caterer = res as CatererDto;
        this.getUserOrderPending(this.caterer.id);
        this.getUserOrderRecieved(this.caterer.id)
      },
      (error) => {
        this.errorService.handleError(error);
      })
    }
  
    public getUserOrderPending = (id:string) => {

      const addressUri: string = `api/orders/${id}/pending`;
      this.repoService.getData(addressUri)
      .subscribe(res => {
        this.ordersPending = res as OrderDto[];
      },
      (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
      })
    }


    public getUserOrderRecieved = (id:string) => {

      const addressUri: string = `api/orders/${id}/receivedOrders`;
      this.repoService.getData(addressUri)
      .subscribe(res => {
        this.orders = res as OrderDto[];
      },
      (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
      })
    }



    public redirectToDetails = async (id: string) => {

      let url: string = `/cat-tabs/cat-tab1/order-details/${id}`;
      this.router.navigate([url]);
    }


    public redirect = async (id: string) => {

      if (this.modalController) {
        const topModal = await this.modalController.getTop();
        if (topModal) {
          this.modalController.dismiss();
        }
      }
      let url: string = `/cat-tabs/cat-tab1/order-details/${id}`;
      this.router.navigate([url]);
    }


    async canDismiss(data?: any, role?: string) {
      return role !== 'gesture';
    }
}
