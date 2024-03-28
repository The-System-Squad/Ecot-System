import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalController } from '@ionic/angular';
import { Address } from 'src/app/models/orders';
import { BasketService } from 'src/app/shared/basket.service';
import { SuccessDialogPage } from 'src/app/shared/modals/success-dialog/success-dialog.page';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  address: Address | any;
  addressForm?: FormGroup | any;
  public errorMessage: string = '';
  public showError?: boolean;
  showSuccess?: boolean;
  private dialogConfig: any;

  constructor(
    private basketService: BasketService,
    private repoService: RepositoryService,
    private modalController: ModalController,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.addressForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      hostelName: new FormControl(''),
      roomNumber: new FormControl(''),
      phone: new FormControl('')
    });
    this.getUserAddress();

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {},
    };
  }
// address
private getUserAddress = () => {

  const addressUri: string = 'api/accounts/address';
  this.repoService.getData(addressUri)
  .subscribe({
    next: (own: Address |any) => {
      this.address={...own};
      this.addressForm.patchValue(this.address);
    },
    error: (err: HttpErrorResponse) => {
      this.showError = true;
      this.errorMessage = err.message;
    }
  })
}

public validateControl = (controlName: string) => {
  return this.addressForm?.get(controlName)?.invalid && this.addressForm?.get(controlName)?.touched
}
public hasError = (controlName: string, errorName: string) => {
  return this.addressForm.get(controlName)?.hasError(errorName)
}

public registerAddress = (addressFormValue: any) => {
  const formValues = { ...addressFormValue };
  const user: Address= {
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    hostelName: formValues.hostelName,
    roomNumber: formValues.roomNumber,
    phone: formValues.phone,
    
  };
  this.repoService.update("api/accounts/address", user)
  .subscribe({
    next: (_) => {
      let dialogRef = this.dialog.open(
        SuccessDialogPage,
        this.dialogConfig
      );
      //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
      dialogRef.afterClosed().subscribe((result) => {
        
      });
  },
  error: (err: HttpErrorResponse) => {
    this.showError = true;
    this.errorMessage = err.message;
  }})
}


dismissModal() {
  this.modalController.dismiss();
}

}
