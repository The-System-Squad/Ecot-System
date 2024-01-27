import { Injectable } from '@angular/core';
import { Auth, PasswordPolicy, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, user, updateProfile} from '@angular/fire/auth'
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(email: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }

  signup(firstName, lastName, dateofBirth, roomNumber, phoneNumber, email, password, confirmPassword){
    return from(createUserWithEmailAndPassword(this.auth, email, password,)
    ).pipe(switchMap(({ user }) => updateProfile(user, { displayName: firstName}))
    );
  }

}
