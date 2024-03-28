import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserForAuthenticationDto, AuthResponseDto } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/shared/authentication.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage  implements OnInit{
  role :any;
  private returnUrl: string |any;
  type: boolean = true;
  
  loginForm: FormGroup |any;
  errorMessage: string = '';
  showError: boolean |any;
  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  changeType() {
    this.type = !this.type;    
  }

  validateControl = (controlName: string) => {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched
  }
  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName).hasError(errorName)
  }
  
  loginUser = (loginFormValue:any) => {
    this.showError = false;
    const login = {... loginFormValue };
    const userForAuth: UserForAuthenticationDto = {
      email: login.username,
      password: login.password
    }
    this.authService.loginUser('api/accounts/login', userForAuth)
    .subscribe({
      next: (res:AuthResponseDto) => {
       localStorage.setItem("token", res.token);
       this.role = this.authService.GetRolebyToken();
       this.authService.updateuser.next();
       console.log(this.role)
       if (this.role === "Client") {
         this.router.navigate(['']);
       } else if (this.role === "Caterer") {
         this.router.navigate(['/cat-tabs/cat-tab1']);
       } 
    },
    error: (err: HttpErrorResponse) => {
      this.errorMessage = err.message;
      this.showError = true;
    }})
  }

  public logout = () => {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
