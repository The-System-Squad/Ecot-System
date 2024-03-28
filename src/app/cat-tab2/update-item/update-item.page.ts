import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductDto, ProductForCreationDto, ProductForUpdateDto } from 'src/app/models/caterer';
import { DataService } from 'src/app/shared/data.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { SuccessDialogPage } from 'src/app/shared/modals/success-dialog/success-dialog.page';
import { RepositoryService } from 'src/app/shared/repository.service';
import { AddItemPage } from '../add-item/add-item.page';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  errorMessage: string = '';
  dataForm: FormGroup |any;
  private dialogConfig: any;
  public showError?: boolean;
  result: any;
  response!: { dbPath: '' };
  product : ProductDto |any;
  selectedPaymentOption: any = "1";

  constructor( 
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private dialog: MatDialog,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<UpdateItemPage>) {}

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

    this.getProdcutToUpdate();
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

  public UpdateData = (dataFormValue: any) => {
    const formValues = { ...dataFormValue };
    const data: ProductForUpdateDto = {
      name: dataFormValue.name,
      description: dataFormValue.description,
      price: dataFormValue.price,
      pictureUrl: this.response.dbPath,
      
    };
    console.log(data);
    let id = this.result.id;
    const apiUri: string = `api/products/${id}`;
    this.repoService.update(apiUri, data)
    .subscribe({
      next: (_) => {
        let dialogRef = this.dialog.open(
          SuccessDialogPage,
          this.dialogConfig
        );
    
        dialogRef.afterClosed().subscribe((result) => {
          this.dataService.triggerRefreshTab1();
          this.Ref.close([]);
        });
    },
    error: (err: HttpErrorResponse) => {
      this.showError = true;
      this.errorMessage = err.message;
    }})
  }

  closeModal(){
    this.Ref.close([]);
  }

  private getProdcutToUpdate = () => {
    let id = this.result.id;
    const Uri: string = `api/products/${id}`;
    this.repoService.getData(Uri)
    .subscribe({
      next: (own: ProductDto|any) => {
        this.product={...own};
        this.dataForm.patchValue(this.product);
        this.response = { dbPath: this.product?.pictureUrl || '' };
      },
      error: (err: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.message;
      }
    })
  }

}
