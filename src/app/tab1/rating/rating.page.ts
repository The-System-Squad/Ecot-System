import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CatererDto, RatingForCreationDto } from 'src/app/models/caterer';
import { DataService } from 'src/app/shared/data.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { SuccessDialogPage } from 'src/app/shared/modals/success-dialog/success-dialog.page';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  public errorMessage: string = '';
  public showError?: boolean;
  showSuccess?: boolean;
  private dialogConfig: any;
  user?: any
  public caterer!: CatererDto | any;

  ratingForm?: FormGroup | any;
  constructor(   
    private repoService: RepositoryService,
    private router: Router, 
    private activeRoute: ActivatedRoute,
    private location: Location,  
    private dialog: MatDialog, 
    private errorService: ErrorHandlerService,
    private dataService: DataService,
    ) { }
  
  ngOnInit(): void {
    this.ratingForm = new FormGroup({
      reviewBody: new FormControl('', [Validators.maxLength(30),]),
      starsCount: new FormControl('', [ Validators.required, Validators.maxLength(5)])
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {},
    };
    this.getCatererDetails();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ratingForm.controls[controlName].hasError(errorName);
  };

  public createRating = (dataFormValue: any) => {

    if (this.ratingForm.valid) {
      this.executeRatingCreation(dataFormValue);

    }
  };
  private executeRatingCreation = (dataFormValue: any) => {
    let id: string = this.activeRoute.snapshot.params['id'];

    

    let product: RatingForCreationDto = {
 
      reviewBody: dataFormValue.reviewBody,
      starsCount: dataFormValue.starsCount,
      catererId: id,
    };


    console.log(product);

    let apiUrl: string = 'api/ratings';
    this.repoService.create(apiUrl, product).subscribe(
      (res) => {
        let dialogRef = this.dialog.open(
          SuccessDialogPage,
          this.dialogConfig
        );
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed().subscribe((result) => {
          let Id: string = this.activeRoute.snapshot.params['id'];
          this.getCatererDetails();
          this.dataService.triggerRefreshTab1();
          this.router.navigate([`/tabs/tab1/caterer/${Id}`]);
        });
      },
      (error) => {
        this.errorService.handleError(error);
      }
    );
  };

  private getCatererDetails = () =>{
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `api/caterers/${id}`;
 
    this.repoService.getData(apiUrl)
    .subscribe(res => {
      this.caterer = res as CatererDto;
    },
    (err: HttpErrorResponse) =>{
      this.errorMessage = err.message;
      this.showError = true;
    })
  }
 onBack(){
  let Id: string = this.activeRoute.snapshot.params['id'];
  this.router.navigate([`/tabs/tab1/caterer/${Id}`]);
 }

}
