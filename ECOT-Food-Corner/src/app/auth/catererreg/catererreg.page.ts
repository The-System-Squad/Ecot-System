import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../registration/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { PasswordValidator } from '../registration/password.validator';

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
  selector: 'app-catererreg',
  templateUrl: './catererreg.page.html',
  styleUrls: ['./catererreg.page.scss'],
})
export class CatererregPage implements OnInit {registrationForm= new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  businessName: new FormControl('', Validators.required),
  dateofBirth: new FormControl('',Validators.required),
  residentialAddress: new FormControl('',Validators.required),
  phoneNumber: new FormControl('',Validators.maxLength(8)),
  email: new FormControl('', Validators.email),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),
}, {validators: PasswordValidator});
  snackBar: any;

get firstName(){
  return this.registrationForm.get('firstName');
}
get lastName(){
  return this.registrationForm.get('lastName');
}

get businessName(){
  return this.registrationForm.get('businessName');
}

get dateofBirth(){
  return this.registrationForm.get('dateofBirth');
}
get residentialAddress(){
  return this.registrationForm.get('residentialAddress');
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

onSubmit(): void{
  const role = 'customer';

  this.authService.register(this.registrationForm.value).subscribe({
    next: (res) => {
      if (res == null){
        alert("Registration did not succeed");
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
