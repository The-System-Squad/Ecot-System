import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, PasswordPolicy, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, user, updateProfile} from '@angular/fire/auth'
import { ToastrService } from 'ngx-toastr';
import { Observable, from, switchMap } from 'rxjs';

const Basic_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth, private http: HttpClient, private toastr: ToastrService) { }

  login(EMAIL: string, PASSWORD: string, ROLES){
    return from(signInWithEmailAndPassword(this.auth, EMAIL, PASSWORD))
  }

  signup(FIRST_NAME,LAST_NAME, DATE_OF_BIRTH, RESIDENTIAL_ADDRESS, CONTACT_NUM, EMAIL, PASSWORD, ROLES, PHOTOFILENAME){
    return from(createUserWithEmailAndPassword(this.auth, EMAIL, PASSWORD)
    ).pipe(switchMap(({ user }) => updateProfile(user, { displayName: FIRST_NAME}))
    );
 }
  showSuccess(message: string){
  this.toastr.success(message);
}
}
