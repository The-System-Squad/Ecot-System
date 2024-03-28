import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { AuthResponseDto, RegistrationResponseDto, UserForAuthenticationDto, UserForRegistrationDto } from '../models/user';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  tokenresp: any;
  token!: any;
  private authChangeSub = new Subject<boolean>()
  public authChanged = this.authChangeSub.asObservable();

  private _updateuser = new Subject<void>();
  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService, private jwtHelper: JwtHelperService) { }

  get updateuser() {
    return this._updateuser;
  }

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto> (this.createCompleteRoute(route, this.envUrl.urlAddress), body);
  }

  public loginUser = (route: string, body: UserForAuthenticationDto) => {
    return this.http.post<AuthResponseDto>(this.createCompleteRoute(route, this.envUrl.urlAddress), body);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }

  public logout = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }

  public isUserAuthenticated = (): boolean |any => {
    const token = localStorage.getItem("token");
 
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  GetRolebyToken() {
    const token = localStorage.getItem("token");
    if (token) {
        const decodedToken = this.jwtHelper.decodeToken(token);
        console.log(decodedToken);
        const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        return role;
    } else {
        // Handle case when token is null, for example:
        console.error("Token is null");
        return null; // or whatever is appropriate in your case
    }
}

GetUserIdbyToken() {
  const token = localStorage.getItem("token");
  if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      return role;
  } else {
      // Handle case when token is null, for example:
      console.error("Token is null");
      return null; // or whatever is appropriate in your case
  }
}

public loadCurrentUserFirstName () {
  const token: any = localStorage.getItem("token");
  const decodedToken = this.jwtHelper.decodeToken(token);
  const name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'];
  return name ;
}

public loadCurrentUserLastName () {
  const token: any = localStorage.getItem("token");
  const decodedToken = this.jwtHelper.decodeToken(token);
  const name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'];
  return name ;
}

public loadCurrentUserEmail () {
  const token: any = localStorage.getItem("token");
  const decodedToken = this.jwtHelper.decodeToken(token);
  const name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
  return name ;
}

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }


}
