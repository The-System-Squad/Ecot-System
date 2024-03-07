import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl ('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  role : string = '';

  user : User = new User();

  roles : string [];

  type: boolean = true;
  constructor(private router : Router, private authService : AuthService) {
    this.roles = [
      'caterer',
      'customer'
    ]
   }

  ngOnInit() {
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
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  onSubmit(){
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    this.user.role = this.role;

    this.authService.login(this.user).subscribe({
      next: (res) => {
        if(res == null){
          alert("Email or passsword is wrong");
          this.ngOnInit();
        }else{
          console.log("Login successful");
          localStorage.setItem("token", res.token);
  
          if (this.role == 'customer'){
            this.router.navigate(['/catererlist']);
          }
          if( this.role == 'caterer'){
            this.router.navigate(['/home']);
          }
        }
      },
      error: () =>{
        alert("Login failed");
        this.ngOnInit()
      },
  complete: () => console.log('completed')
      
    });
    
  }
}