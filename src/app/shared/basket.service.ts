import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBasket, IBasketTotals, IBasketItem, Basket } from '../models/cart';
import { ProductDto } from '../models/caterer';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl: string = environment.urlAddress+'/api/'
  private basketSource = new BehaviorSubject<IBasket>(null!);
  // similar to async pipe
  basket$ = this.basketSource.asObservable();
  private basketTotalSource = new BehaviorSubject<IBasketTotals>(null!);
  basketTotals$ = this.basketTotalSource.asObservable();

  shipping = 0;

  constructor(private http: HttpClient) { }




    deleteLocalBasket(id: string) {
    this.basketSource.next(null!);
    this.basketTotalSource.next(null!);
    localStorage.removeItem('basket_id');
  }



  getBasket(id: string) {
    return this.http.get(this.baseUrl + 'basket?id=' + id)
      .pipe(
        map((basket: IBasket | any) => {
          this.basketSource.next(basket);
          console.log(this.getCurrentBasketValue());
          this.calculateTotals();
        }));
  }

  setBasket(basket: IBasket) {
    return this.http.post(this.baseUrl + 'basket', basket)
      .subscribe((response: IBasket |any) => {
        // This will update the BehaviorSubject withnew value
        this.basketSource.next(response);
        console.log(response);
        this.calculateTotals();
      }, (error) => console.log(error));
  }

  getCurrentBasketValue() {
    return this.basketSource.value;
  }

  addItemToBasket(item: ProductDto, quantity = 1) {
    const itemToAdd: IBasketItem = this.mapProductToBasketItem(item, quantity);
    const basket = this.getCurrentBasketValue() ?? this.createBasket();
    basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }

  incrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
    basket.items[foundItemIndex].quantity++;
    this.setBasket(basket);
  }

  decrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
    if (basket.items[foundItemIndex].quantity > 1) {
      basket.items[foundItemIndex].quantity--;
      this.setBasket(basket);
    } else {
      this.removeItemFromBasket(item);
    }
  }
  removeItemFromBasket(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    if (basket.items.some(x => x.id === item.id)) {
      basket.items = basket.items.filter(x => x.id !== item.id)
      if (basket.items.length > 0) {
        this.setBasket(basket);
      } else {
        this.deleteBasket(basket);
      }
    }
  }
  deleteBasket(basket: IBasket) {
    return this.http.delete(this.baseUrl + 'basket?id=' + basket.id).subscribe (() => {
      this.basketSource.next(null!);
      this.basketTotalSource.next(null!);
      localStorage.removeItem('basket_id');
    }, error => {
      console.log(error);
    });
  }

 private calculateTotals() {
   const basket = this.getCurrentBasketValue();
   const shipping = this.shipping;
   const subTotal = basket.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
   const total = shipping + subTotal;
   this.basketTotalSource.next({shipping, total, subTotal});
 }
 private addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }

  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }

  private mapProductToBasketItem(item: ProductDto, quantity: number): IBasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      catererId:item.catererId
    };
  }
}