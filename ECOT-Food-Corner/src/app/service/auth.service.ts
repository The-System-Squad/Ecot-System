import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

readonly APIUrl= "https://localhost:7166/api";
readonly PhotoUrl= "https://localhost:7166/Photos";

  

  constructor(private http : HttpClient) { }

  getUser(val: any){
    return this.http.get(this.APIUrl+'/user',val)
    
  }

  addUser(val: any){
    return this.http.post(this.APIUrl+'/user',val)
  }

  addish(val: any){
    return this.http.post(this.APIUrl+'/user/dish',val)
  }

  updateUser(val: any){
    return this.http.put(this.APIUrl+'/user',val)
  }

  deleteUser(val: any){
    return this.http.delete(this.APIUrl+'/user/',val)
  }

  uploadPhoto(val: any){
    return this.http.post(this.APIUrl+'/user/savefile',val)
  }

  
}
