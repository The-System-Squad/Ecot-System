import { Component, OnInit } from '@angular/core';
import { CatererDto } from '../models/caterer';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '../shared/data.service';
import { DialogService } from '../shared/dialog.service';
import { ErrorHandlerService } from '../shared/error-handler.service';
import { RepositoryService } from '../shared/repository.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  caterer: CatererDto|any;
  searchTerm: string = '';

  displayedColumns: string[] = ['picture', 'firstName', 'lastName'];
  dataSource = new MatTableDataSource<CatererDto>([]);

  constructor( 
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private router: Router,
    private dialog: MatDialog,
    private modalController: ModalController,
    private dialogserve: DialogService,
    private dataService: DataService,) {

    }

  ngOnInit(): void {

      this.getCaterers();
      this.getCaterer();
  
    }

  public getCaterers = () => {
    const addressUri: string = `api/caterers`;
    this.repoService.getData(addressUri)
    .subscribe(res => {
      this.caterer = res as CatererDto[];
    },
    (error) => {
      this.errorService.handleError(error);
    })
  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
   
  }

  async closeModal() {
    this.modalController.dismiss();
  }

  public getCaterer = () => {
    const addressUri: string = `api/caterers`;
  
    this.repoService.getData(addressUri).subscribe(
      (res: any) => {
        this.caterer = res as CatererDto[];
        this.dataSource.data = this.caterer || [];
      },
      (error) => {
        this.errorService.handleError(error);
      }
    );
  }

  getCatererData(): CatererDto[] {
    return this.dataSource.data;
  }

  filterCaterers() {
    const searchTerm = this.searchTerm.toLowerCase();
    if (!searchTerm) {
      // If search term is empty, reset the dataSource to show all caterers
      this.dataSource.data = this.caterer;
      return;
    }
    // Filter caterers based on the search term
    this.dataSource.data = this.caterer.filter((caterer: CatererDto) =>
      caterer.firstName.toLowerCase().includes(searchTerm) ||
      caterer.lastName.toLowerCase().includes(searchTerm)
    );
  }
  public redirectToDetails = async (id: string) => {
    if (this.modalController) {
      const topModal = await this.modalController.getTop();
      if (topModal) {
        this.modalController.dismiss();
      }
    }
    let url: string = `/tabs/tab1/caterer/${id}`;
    this.router.navigate([url]);
  }
}
