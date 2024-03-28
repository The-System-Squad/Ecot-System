import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatererDto, CatererForUpdateDto, PictureDto, PictureForUpdateDto } from 'src/app/models/caterer';
import { DataService } from 'src/app/shared/data.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { SuccessDialogPage } from 'src/app/shared/modals/success-dialog/success-dialog.page';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-add-pic',
  templateUrl: './add-pic.page.html',
  styleUrls: ['./add-pic.page.scss'],
})
export class AddPicPage implements OnInit {

  errorMessage: string = '';
  dataForm: FormGroup |any;
  private dialogConfig: any;
  public showError?: boolean;
  result: any;
  response!: { dbPath: '' };
  caterer : CatererDto |any;

  constructor( 
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private dialog: MatDialog,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<AddPicPage>) {}

  ngOnInit() {
    this.dataForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });

    this.dialogConfig = {
      height: '200px',
      width: '250px',
      disableClose: true,
      data: {},
    };
    this.result = this.data;

    this.getCatererToUpdate();
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
    const data: CatererForUpdateDto = {
      firstName: dataFormValue.firstName,
      lastName: dataFormValue.lastName,
      pictureUrl: this.response.dbPath,
      
    };
    console.log(data);
    let id = this.result.id;
    const apiUri: string = `api/caterers/${id}`;
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

  private getCatererToUpdate = () => {
    let id = this.result.id;
    const Uri: string = `api/caterers/${id}`;
    this.repoService.getData(Uri)
    .subscribe({
      next: (own: CatererDto|any) => {
        this.caterer={...own};
        this.dataForm.patchValue(this.caterer);
        this.response = { dbPath: this.caterer?.pictureUrl || '' };
      },
      error: (err: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.message;
      }
    })
  }


}
