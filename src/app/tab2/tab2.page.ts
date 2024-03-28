import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketTotals, IBasketItem } from '../models/cart';
import { BasketService } from '../shared/basket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  basket$!: Observable<IBasket>;
  basketTotals$!: Observable<IBasketTotals>;
  @Input() isBasket = true;

 constructor(private basketService: BasketService,    private router: Router,) { }

 // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
 ngOnInit() {
   this.basket$ = this.basketService.basket$;
   this.basketTotals$ = this.basketService.basketTotals$;
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

 public redirectToDetails = async (id: string) => {
  let url: string = `/tabs/tab2/checkout/${id}`;
  this.router.navigate([url]);
}
}
