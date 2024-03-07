import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, PasswordPolicy, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, user, updateProfile} from '@angular/fire/auth'
import { Observable, from, switchMap } from 'rxjs';

const Basic_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth, private http: HttpClient) { }

  register(signupRequest: any): Observable<any>{
    return this.http.post(Basic_URL + "catererreg", signupRequest);
  }

  login(email: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }

  signup(firstName, lastName, dateofBirth, roomNumber, phoneNumber, email, password, confirmPassword){
    return from(createUserWithEmailAndPassword(this.auth, email, password,)
    ).pipe(switchMap(({ user }) => updateProfile(user, { displayName: firstName}))
    );
  }

}
