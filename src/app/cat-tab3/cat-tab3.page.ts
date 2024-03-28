import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatererDto } from '../models/caterer';
import { ErrorHandlerService } from '../shared/error-handler.service';
import { RepositoryService } from '../shared/repository.service';
import { AddPicPage } from './add-pic/add-pic.page';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-cat-tab3',
  templateUrl: './cat-tab3.page.html',
  styleUrls: ['./cat-tab3.page.scss'],
})
export class CatTab3Page implements OnInit {

  caterer : CatererDto |any;
  errorMessage: string = '';
  private dialogConfig: any;
  public showError?: boolean;
  private refreshSubscription!: Subscription;
  
    constructor(    
      private repoService: RepositoryService,
      private errorService: ErrorHandlerService, 
      private router: Router,
      private dialog: MatDialog,
      private dataService: DataService,
      private authService: AuthenticationService) {
        this.refreshSubscription = this.dataService.refreshTab1$.subscribe(() => {
          this.getCaterer();
        });

       }
  
    ngOnInit() {
      this.getCaterer();
    }
  
    private getCaterer = () =>{
    
      let apiUrl: string = `api/caterers/details`;
   
      this.repoService.getData(apiUrl)
      .subscribe(res => {
        this.caterer = res as CatererDto;
      },
      (error) => {
        this.errorService.handleError(error);
      })
    }
    AddPic(id: string) {

      const popup = this.dialog.open(AddPicPage, {
        width: '400px', height: '470px',
        enterAnimationDuration: '100ms',
        exitAnimationDuration: '100ms',
       data:{
        id:id
       }
      });
    }

    public logout = () => {
      this.authService.logout();
      this.router.navigate(["/auth/login"]);
    }
}
