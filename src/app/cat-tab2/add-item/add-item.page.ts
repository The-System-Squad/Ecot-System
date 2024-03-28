import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductForCreationDto } from 'src/app/models/caterer';
import { DataService } from 'src/app/shared/data.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { SuccessDialogPage } from 'src/app/shared/modals/success-dialog/success-dialog.page';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  errorMessage: string = '';
  dataForm: FormGroup |any;
  private dialogConfig: any;
  public showError?: boolean;
  result: any;
  response!: { dbPath: '' };
  
  constructor( 
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private dialog: MatDialog,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<AddItemPage>) {}

  ngOnInit() {
    this.dataForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl('')
    });

    this.dialogConfig = {
      height: '200px',
      width: '250px',
      disableClose: true,
      data: {},
    };
    this.result = this.data;

    console.log(this.result.id);
  }
  uploadFinished = (event: any) => {
    this.response = event;
  };


  public validateControl = (controlName: string) => {
    return this.dataForm?.get(controlName)?.invalid && this.dataForm?.get(controlName)?.touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.dataForm?.get(controlName)?.hasError(errorName)
  }

  public createData = (dataFormValue: any) => {

    if (this.dataForm.valid) {
      this.executeDataCreation(dataFormValue);

    }
  };
  private executeDataCreation = (dataFormValue: any) => {

    let catererId = this.result.id;
    let product: ProductForCreationDto = {
   
      name: dataFormValue.name,
      description: dataFormValue.description,
      price: dataFormValue.price,
      pictureUrl: this.response.dbPath,
      catererId:catererId

    };
    console.log(product);
    let id = this.result.id;
    const apiUri: string = `api/products`;
    this.repoService.create(apiUri, product).subscribe(
      (res) => {
        let dialogRef = this.dialog.open(
          SuccessDialogPage,
          this.dialogConfig
        );
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed().subscribe((result) => {
          this.dataService.triggerRefreshTab1();
          this.Ref.close([]);
        });
      },
      (error) => {
        this.errorService.handleError(error);
      }
    );
  };

  closeModal(){
    this.Ref.close([]);
  }



}
