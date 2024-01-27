import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable , of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  

  constructor(private http: HttpClient) { 
    
  }
  
  getAllMenuDishes(): Observable<any> {
return this.http.get('../../assets/json/menuDish.json');
  }

  getAllDishes(): Observable<any> {
    return this.http.get('../../assets/json/dish.json');
      }

      getAllOrders(): Observable<any> {
        return this.http.get('../../assets/json/order.json');
          }
          
          getAllPayments(): Observable<any>{
            return this.http.get('../../assets/json/payment.json')
          }

  
}

