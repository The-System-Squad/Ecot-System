import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  role : string = '';

  roles: string [];

  type: boolean = true;
  constructor(private router : Router, private authService: AuthenticationService, private toast: HotToastService, private toastr: ToastrService) {
    this.roles = [
      'Caterer',
      'Customer'
    ]
   }
   loginForm = new FormGroup({
    EMAIL: new FormControl ('',[Validators.required, Validators.email]),
    PASSWORD: new FormControl('', Validators.required),
    ROLES: new FormControl(this.role)
  });

  ngOnInit() {
    this.loginForm.value.EMAIL = '';
    this.loginForm.value.PASSWORD= '';
    this.loginForm.value.ROLES='';
  }

  changeType() {
    this.type = !this.type;    
  }
  goToHome() {
    console.log(this.loginForm); 
    this.router.navigate(['/preferences']);
  }

  goToForget() {
    console.log("Forget");
    this.router.navigate(['forget']);
  }

  facebookLogin() {
    console.log("Facebook");
    this.router.navigate(['setting']);
  }

  twitterLogin() {
    console.log("Twitter");
    this.router.navigate(['setting']);
  }

  gmailLogin() {
    console.log("Gmail");
    this.router.navigate(['setting']);
  }

  touchLogin() {
    console.log("Touch Login");
    this.router.navigate(['/touch-id']);
  }

  faceLogin() {
    console.log("Face Login");
    this.router.navigate(['/face-id']);
  }

  goToRegistration() {
    this.router.navigate(['registration']);
  }
  
  onSubmit(){
  
    this.loginForm.value.EMAIL;
    this.loginForm.value.PASSWORD;
    this.loginForm.value.ROLES;

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        if (res==null){
          alert("Incorrect email or password");
          this.ngOnInit();
        }else{
          console.log("Login Succesfully");
          this.loginForm.reset;
          
            this.router.navigate(['/catererlist']);
        }
      },error:()=>{
        alert("Login Error");
        this.ngOnInit();
      },
      complete:() => console.log("completed")
    });
    
  }
}