import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { PasswordValidator} from './password.validator'
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
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

user : User = new User();

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

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit():void {
    this.registrationForm.value.firstName = '';
    this.registrationForm.value.lastName = '';
    this.registrationForm.value.dateofBirth = '';
    this.registrationForm.value.roomNumber = '';
    this.registrationForm.value.phoneNumber = '';
    this.registrationForm.value.email = '';
    this.registrationForm.value.password = '';
    this.registrationForm.value.confirmPassword = '';
  }
onSubmit(){
  
  this.user.firstName = this.registrationForm.value.firstName;
  this.user.lastName = this.registrationForm.value.lastName;
  this.user.dateofBirth = this.registrationForm.value.dateofBirth;
  this.user.roomNumber = this.registrationForm.value.roomNumber;
  this.user.phoneNumber = this.registrationForm.value.phoneNumber;
  this.user.email = this.registrationForm.value.email;
  this.user.password = this.registrationForm.value.password;
  this.user.role = 'customer';

  this.authService.signUp(this.user).subscribe({
    next: (res) => {
      if (res == null){
        alert("Registration failed");
        this.ngOnInit();
      }else{
        console.log("Registration successful");
        this.router.navigate(['/login']);
      }
    },
    error: () =>{
  alert("Registration failed.");
  this.ngOnInit()
},
complete: () => console.log('completed')
    
  });
}
}

