import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EnvironmentUrlService } from './environment-url.service';
import { OrderCreationDto } from '../models/orders';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  
  private orderData: OrderCreationDto | null = null;
  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) {}

  createOrder(order:OrderCreationDto): Observable<any> {
    return this.http.post(this.envUrl.urlAddress + '/api/orders', order);
  }

  setOrderData(data: OrderCreationDto) {
    this.orderData = data;
  }

  getOrderData(): OrderCreationDto | null {
    return this.orderData;
  }


}
