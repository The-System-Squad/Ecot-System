import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {
  role : string = '';

  roles: string [];

  type: boolean = true;
  constructor(private auth: AuthService, private router: Router) {
    
   }
   loginForm = new FormGroup({
    DISH_NAME: new FormControl ('',[Validators.required, Validators.email]),
    AMOUNT: new FormControl('', Validators.required),
    IMAGES: new FormControl('',Validators.required)
  });

  ngOnInit():void {
    this.loginForm.value.DISH_NAME = '';
    this.loginForm.value.AMOUNT = '';
    this.loginForm.value.IMAGES='';

  }

  
  onSubmit(){
    this.loginForm.value.DISH_NAME;
    this.loginForm.value.AMOUNT;
    this.loginForm.value.IMAGES;

    this.auth.addish(this.loginForm.value).subscribe({
      next: (res) => {
        if (res==null){
          alert("Adding dish Failed");
          this.ngOnInit();
        }else{
          console.log("dish added successfully");
          this.loginForm.reset;
          
            this.router.navigate(['/view-dishes']);
        }
      },error:()=>{
        alert("Adding Dish Failed");
        this.ngOnInit();
      },
      complete:() => console.log("completed")
    });
  
  }
}