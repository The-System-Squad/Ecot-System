import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly APIUrl= "https://localhost:7221/api";

  constructor(private http : HttpClient) { }

  register(val: any){
    return this.http.post(this.APIUrl+'/user/register',val)
  }

  login(val: any){
    return this.http.post(this.APIUrl+'/user/authenticate',val)
  }

}
