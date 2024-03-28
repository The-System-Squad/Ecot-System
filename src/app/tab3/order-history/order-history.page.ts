import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderDto } from 'src/app/models/orders';
import { DataService } from 'src/app/shared/data.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { RepositoryService } from 'src/app/shared/repository.service';
import { OrdersPage } from '../orders/orders.page';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  errorMessage: string = '';
  private dialogConfig: any;
  public showError?: boolean;
  result:any
  orders :OrderDto[] | any;

  
    constructor( 
      private repoService: RepositoryService,
      private errorService: ErrorHandlerService, 
      private router: Router,
      private dialog: MatDialog,
      private dialogserve: DialogService,
      private dataService: DataService,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private Ref: MatDialogRef<OrdersPage>) {
     
      }

  ngOnInit(): void {
 
    this.result =this.data
    this.getUserOrder();
  }
  public getUserOrder = () => {
    let id = this.result.id;
    const addressUri: string = `api/orders/${id}/userRecievedOrders`;
    this.repoService.getData(addressUri)
    .subscribe(res => {
      this.orders = res as OrderDto[];
    },
    (err: HttpErrorResponse) => {
      this.errorMessage = err.message;
      this.showError = true;
    })
  }

  closeModal(){
    this.Ref.close([]);
  }


}
