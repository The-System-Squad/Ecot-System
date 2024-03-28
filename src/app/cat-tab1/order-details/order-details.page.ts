import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDto } from 'src/app/models/orders';
import { DataService } from 'src/app/shared/data.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { SuccessDialogPage } from 'src/app/shared/modals/success-dialog/success-dialog.page';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  order?: OrderDto;
  showSuccess!: boolean;
  showError!: boolean;
  errorMessage!: string;
  private dialogConfig: any;
  
  
    constructor(
      private activeRoute: ActivatedRoute,
      private repoService: RepositoryService,
      private dialogserve: DialogService,
      private dialog: MatDialog,
      private router: Router,
      private dataService: DataService,
      ) { }
  
    ngOnInit() {
      this.getOrderDetails();
    }
    private getOrderDetails = () =>{
      let id: string = this.activeRoute.snapshot.params['id'];
      let apiUrl: string = `api/orders/${id}`;
   
      this.repoService.getData(apiUrl)
      .subscribe(res => {
        this.order = res as OrderDto;
      //  console.log('Order:',this.order);
      },
      (err: HttpErrorResponse) =>{
        this.errorMessage = err.message;
        this.showError = true;
      })
    }

    RecievedOrderUpdate(id: any) {
      this.dialogserve
        .openConfirmDialog('Did you deliver the order ?')
        .afterClosed()
        .subscribe(   (res) => {
          if (res) {
            const deleteUri: string = `api/orders/${id}`;
            this.repoService.update2(deleteUri).subscribe((res) => {
              let dialogRef = this.dialog.open(
                SuccessDialogPage,
                this.dialogConfig
              );
              dialogRef.afterClosed().subscribe((result) => {
                this.dataService.triggerRefreshTab1(); // Trigger refresh event when closing dialog
                this.router.navigate(['cat-tabs/cat-tab1']);
              });
            });
          }
        });
    }

}
