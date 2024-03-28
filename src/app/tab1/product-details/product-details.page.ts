import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { IBasket, IBasketTotals, IBasketItem } from 'src/app/models/cart';
import { ProductDto } from 'src/app/models/caterer';
import { BasketService } from 'src/app/shared/basket.service';
import { DataService } from 'src/app/shared/data.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Location } from '@angular/common';
import { ModalService } from 'src/app/shared/modal.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  public errorMessage: string = '';
  public showError?: boolean;
  @Input() productId?: string;
  public product: ProductDto | any;
  basket$!: Observable<IBasket>;
   basketTotals$!: Observable<IBasketTotals>;
   @Input() isBasket = true;
   private refreshSubscription!: Subscription;

   private openModals: any[] = [];
  
  constructor(
    private repository: RepositoryService, 
    private router: Router, 
   private activeRoute: ActivatedRoute, 
   private errorHandler: ErrorHandlerService,
   private location: Location,
   private modalController: ModalController,
   private basketService: BasketService,
   private dataService: DataService,
   private modalService: ModalService,) { 
    this.refreshSubscription = this.dataService.refreshTab1$.subscribe(() => {
      this.getProductDetails();
    });
   }

   ngOnInit() {
    this.getProductDetails();
    this.basket$ = this.basketService.basket$;
    this.basketTotals$ = this.basketService.basketTotals$;
  }

  isProductInBasket(basket: IBasket, productId: string): boolean {

    if (basket && basket.items){
      return basket.items.some(product => product.id === productId);
    }
    return false;
  }

  private getProductDetails = () =>{
    let id: any = this.productId;
    let apiUrl: string = `api/products/${id}`;
 console.log(apiUrl);
    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.product = res as ProductDto;
    },
    (err: HttpErrorResponse) =>{
      this.errorMessage = err.message;
      this.showError = true;
    })
  }
  public onBack = () => {
    this.location.back();
  }
  dismissModal() {
    this.modalController.dismiss();
  }

  checkoutRout(){
    this.modalService.dismissAllModals();
     this.router.navigate(['/tabs/tab2']);
  }
   

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }
  removeBasketItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItem(item: IBasketItem) {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItem(item: IBasketItem) {
    this.basketService.decrementItemQuantity(item);
  }
}
