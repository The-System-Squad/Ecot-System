import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tokenresp: any;
  token!: any;

  private authChangeSub = new Subject<boolean>()
  public authChanged = this.authChangeSub.asObservable();

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  private _updatemenu = new Subject<void>();
  private _updateuser = new Subject<void>();

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }
  public isUserAuthenticated = (): boolean|any => {
    const token = localStorage.getItem("jwt");
    return token && !this.jwtHelper.isTokenExpired(token);
  }
  GetRefreshToken() {
    return localStorage.getItem("refreshtoken") || '';
  }

  GetRolebyToken() {
       this.token = localStorage.getItem("jwt")?.split('.')[1];
      this.tokenresp = JSON.parse(atob(this.token));
    var role = this.tokenresp["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    return role;

  }


    GetUserName() {
       this.token = localStorage.getItem("jwt")?.split('.')[1];
      this.tokenresp = JSON.parse(atob(this.token));
    var name = this.tokenresp["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
      return name;

  }


}
