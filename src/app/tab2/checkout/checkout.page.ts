import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IBasket, IBasketTotals } from 'src/app/models/cart';
import { Address, OrderCreationDto } from 'src/app/models/orders';
import { BasketService } from 'src/app/shared/basket.service';
import { CheckoutService } from 'src/app/shared/checkout.service';
import { DataService } from 'src/app/shared/data.service';
import { SuccessDialogPage } from 'src/app/shared/modals/success-dialog/success-dialog.page';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  basket$!: Observable<IBasket>;
  basketTotals$!: Observable<IBasketTotals>;
  address: Address | any;
  addressForm?: FormGroup | any;

  public errorMessage: string = '';
  public showError?: boolean;
  showSuccess?: boolean;
  private dialogConfig: any;
  private isElementReady = false;

  constructor(
    private basketService: BasketService,
    private checkoutService: CheckoutService,
    private router: Router,
    private repoService: RepositoryService,
    private modalController: ModalController,
    private dialog: MatDialog,
    private dataService: DataService,
    private activeRoute: ActivatedRoute, 
  ) {
  }
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.basketTotals$ = this.basketService.basketTotals$;
    this.addressForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      hostelName: new FormControl(''),
      roomNumber: new FormControl(''),
      phone: new FormControl('')
    });
    this.getUserAddress();


this.dialogConfig = {
  height: '200px',
  width: '400px',
  disableClose: true,
  data: {},
};
}




  submitOrder() {
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);

    this.checkoutService.createOrder(orderToCreate).subscribe(
      (response) => {
        let dialogRef = this.dialog.open(
          SuccessDialogPage,
          this.dialogConfig
        );
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed().subscribe((result) => {
          this.basketService.deleteLocalBasket(basket.id);
          this.router.navigate(['/tabs/tab1']);
        });

      },
      (error) => {
        console.error('Error creating order:', error);
        // Handle error
      }
    );
  }


  test(){
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    console.log(orderToCreate);
  }

  private getOrderToCreate(basket: IBasket){
    let id: string = this.activeRoute.snapshot.params['id'];

    let subtotal: number = 0;

    // Calculate subtotal
    basket.items.forEach(item => {
      subtotal += item.price * item.quantity;
    });

    const orderData: OrderCreationDto = {
      firstName:this.address.firstName,
      lastName: this.address.lastName,
      hostelName: this.address.hostelName,
      roomNumber: this.address.roomNumber,
      subtotal: subtotal,
      catererId: id,
      phone: this.address.phone,
      basketId: basket.id,
       
      orderItems: basket.items.map(item => {
        return {
          productId: item.id,
          productName: item.productName,
          price: item.price,
          quantity: item.quantity,
          pictureUrl: item.pictureUrl,
        };
      
      })
    };
    console.log('Order Data:', orderData);
    return orderData;
  }
  
  // address
  private getUserAddress = () => {

    const addressUri: string = 'api/accounts/address';
    this.repoService.getData(addressUri)
    .subscribe({
      next: (own: Address |any) => {
        this.address={...own};
        this.addressForm.patchValue(this.address);
      },
      error: (err: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.message;
      }
    })
  }



  public validateControl = (controlName: string) => {
    return this.addressForm?.get(controlName)?.invalid && this.addressForm?.get(controlName)?.touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.addressForm.get(controlName)?.hasError(errorName)
  }

  public registerAddress = (addressFormValue: any) => {
    const formValues = { ...addressFormValue };
    const user: Address= {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      hostelName: formValues.hostelName,
      roomNumber: formValues.roomNumber,
      phone: formValues.phone,
      
    };
    this.repoService.update("api/accounts/address", user)
    .subscribe({
      next: (_) => {
        let dialogRef = this.dialog.open(
          SuccessDialogPage,
          this.dialogConfig
        );
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed().subscribe((result) => {
          this.getUserAddress();
        });
    },
    error: (err: HttpErrorResponse) => {
      this.showError = true;
      this.errorMessage = err.message;
    }})
  }


  async closeModal() {
    // Dismiss the modal without using await
    this.modalController.dismiss();
  }


}
