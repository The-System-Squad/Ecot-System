import { Component, OnInit } from '@angular/core';
import { CatererDto} from '../models/caterer';
import { ErrorHandlerService } from '../shared/error-handler.service';
import { RepositoryService } from '../shared/repository.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogPage } from '../shared/modals/success-dialog/success-dialog.page';
import { DataService } from '../shared/data.service';
import { AddItemPage } from './add-item/add-item.page';
import { UpdateItemPage } from './update-item/update-item.page';
import { DialogService } from '../shared/dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-tab2',
  templateUrl: './cat-tab2.page.html',
  styleUrls: ['./cat-tab2.page.scss'],
})
export class CatTab2Page implements OnInit{
caterer : CatererDto |any;
errorMessage: string = '';
public showError?: boolean;
private dialogConfig: any;
private refreshSubscription!: Subscription;

  constructor(    
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService,
    private dialog: MatDialog,
    private dataService: DataService,
    private dialogserve: DialogService) { 
      this.refreshSubscription = this.dataService.refreshTab1$.subscribe(() => {
        this.getCaterer();
      });
    }

  ngOnInit() {
    this.getCaterer();

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {},
    };
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

  addItem(id: string) {

    const popup = this.dialog.open(AddItemPage, {
      width: '400px', height: '450px',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
     data:{
      id:id
     }
    });
  }

  UpdateItem(id: string) {

    const popup = this.dialog.open(UpdateItemPage, {
      width: '400px', height: '450px',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
     data:{
      id:id
     }
    });
  }

  Delete(id: any) {
    this.dialogserve
      .openConfirmDialog('Are you sure, you want to delete this record ?')
      .afterClosed()
      .subscribe(   (res) => {
        if (res) {
          const deleteUri: string = `api/products/${id}`;
          this.repoService.delete(deleteUri).subscribe((res) => {
            let dialogRef = this.dialog.open(
              SuccessDialogPage,
              this.dialogConfig
            );
            dialogRef.afterClosed().subscribe((result) => {
              this.getCaterer();
            });
          });
        }
      });
  }


}
