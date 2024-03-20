import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { PasswordValidator} from '../registration/password.validator'
import { AuthenticationService } from '../../service/authentication.service';
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
  selector: 'app-catererreg',
  templateUrl: './catererreg.page.html',
  styleUrls: ['./catererreg.page.scss'],
})
export class CatererregPage implements OnInit {
  registrationForm= new FormGroup({
    FIRST_NAME: new FormControl('', Validators.required),
    LAST_NAME: new FormControl('', Validators.required),
    DATE_OF_BIRTH: new FormControl('',Validators.required),
    RESIDENTIAL_ADDRESS: new FormControl('',Validators.required),
    CONTACT_NUM: new FormControl('',Validators.maxLength(8)),
    EMAIL: new FormControl('', Validators.email),
    PASSWORD: new FormControl(''),
    confirmPASSWORD: new FormControl(''),
    BUSINESS_NAME: new FormControl(''),
    ROLES: new FormControl('Caterer'),
    TOKEN: new FormControl(''),
    PHOTOFILENAME: new FormControl('anonymous.png')
  }, {validators: PasswordValidator});
  
  get FIRST_NAME(){
    return this.registrationForm.get('FIRST_NAME');
  }
  get LAST_NAME(){
    return this.registrationForm.get('LAST_NAME');
  }
  get DATE_OF_BIRTH(){
    return this.registrationForm.get('DATE_OF_BIRTH');
  }
  get RESIDENTIAL_ADDRESS(){
    return this.registrationForm.get('RESIDENTIAL_ADDRESS');
  }
  get CONTACT_NUM(){
    return this.registrationForm.get('CONTACT_NUM');
  }
  get EMAIL(){
    return this.registrationForm.get('EMAIL');
  }
  get PASSWORD(){
    return this.registrationForm.get('PASSWORD');
  }
  get confirmPASSWORD(){
    return this.registrationForm.get('confirmPASSWORD');
  }
  
  get BUSINESS_NAME(){
    return this.registrationForm.get('BUSINESS_NAME');
  }
  
  get ROLES(){
    return this.registrationForm.get('ROLES');
  }
  
  get PHOTOFILENAME(){
    return this.registrationForm.get('PHOTOFILENAME');
  }
  
    constructor(  private router: Router, private authService: AuthenticationService, private toast: HotToastService) { }
  
    ngOnInit() {
      
  }
  onSubmit(){
    this.registrationForm.value.FIRST_NAME;
    this.registrationForm.value.LAST_NAME;
    this.registrationForm.value.DATE_OF_BIRTH;
    this.registrationForm.value.RESIDENTIAL_ADDRESS;
    this.registrationForm.value.CONTACT_NUM;
    this.registrationForm.value.EMAIL;
    this.registrationForm.value.PASSWORD;
    this.registrationForm.value.confirmPASSWORD;
    this.registrationForm.value.ROLES;
    this.registrationForm.value.PHOTOFILENAME;
    this.registrationForm.value.TOKEN;
  
    this.authService.register(this.registrationForm.value).subscribe({
      next: (res) => {
        if (res==null){
          alert("Registration failed");
          this.ngOnInit();
        }else{
          console.log("Registration Succesful");
          this.registrationForm.reset;
          
            this.router.navigate(['/login']);
        }
      },error:()=>{
        alert("Registration Error");
        this.ngOnInit();
      },
      complete:() => console.log("completed")
    });
  }
}
