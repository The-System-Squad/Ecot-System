import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { PasswordValidator} from '../registration/password.validator'
import { AuthenticationService } from './authentication.service';
import { HotToastService } from '@ngneat/hot-toast'
import { Router } from '@angular/router';

export function passwordsMatchValidator(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      if (password && confirmPassword && password !== confirmPassword){
        return {
          passwordsDontMatch: true
        }
      }
      return null;
  }
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

registrationForm= new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  dateofBirth: new FormControl('',Validators.required),
  roomNumber: new FormControl('',Validators.required),
  phoneNumber: new FormControl('',Validators.maxLength(8)),
  email: new FormControl('', Validators.email),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),
}, {validators: PasswordValidator});

get firstName(){
  return this.registrationForm.get('firstName');
}
get lastName(){
  return this.registrationForm.get('lastName');
}
get dateofBirth(){
  return this.registrationForm.get('dateofBirth');
}
get roomNumber(){
  return this.registrationForm.get('roomNumber');
}
get phoneNumber(){
  return this.registrationForm.get('phoneNumber');
}
get email(){
  return this.registrationForm.get('email');
}
get password(){
  return this.registrationForm.get('password');
}
get confirmPassword(){
  return this.registrationForm.get('confirmPassword');
}

  constructor(  private router: Router, private authService: AuthenticationService, private toast: HotToastService) { }

  ngOnInit() {
  }
onSubmit(){
  if(!this.registrationForm.valid) return;

  const{ firstName, email, password} = this.registrationForm.value;
  this.authService.signup(firstName,this.lastName,this.dateofBirth,this.roomNumber,this.phoneNumber,email, password, this.confirmPassword).pipe(
    this.toast.observe({
      success: 'Congrats! You are all signed up',
      loading: 'Signing in',
      error: 'input all feilds'
    })
  ).subscribe(()=>{
    this.router.navigate(['/login'])
  })
}
}

