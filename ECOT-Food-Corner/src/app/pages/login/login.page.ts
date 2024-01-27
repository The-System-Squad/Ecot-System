import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../registration/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

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

  type: boolean = true;
  constructor(private router : Router, private authService: AuthenticationService, private toast: HotToastService) { }

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
    return this.loginForm.get('email');
  }
  onSubmit(){
    if(!this.loginForm.valid) return;

    const{email, password} = this.loginForm.value;
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged in succesfully',
        loading: 'Logging in...',
        error: 'Invalid email or password'
      })
    ).subscribe(()=>{
      this.router.navigate(['/catererlist'])
    })
  }
}