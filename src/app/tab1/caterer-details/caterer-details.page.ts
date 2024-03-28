import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CatererDto } from 'src/app/models/caterer';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { DataService } from 'src/app/shared/data.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { RepositoryService } from 'src/app/shared/repository.service';
import { ProductDetailsPage } from '../product-details/product-details.page';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-caterer-details',
  templateUrl: './caterer-details.page.html',
  styleUrls: ['./caterer-details.page.scss'],
})
export class CatererDetailsPage implements OnInit {

  public errorMessage: string = '';
  public showError?: boolean;
  @Input() catererId?: string;
 public caterer!: CatererDto | any;
 private refreshSubscription!: Subscription;


 constructor(
  private repository: RepositoryService,
   private router: Router, 
   private modalController: ModalController,
  private activeRoute: ActivatedRoute, 
  private errorHandler: ErrorHandlerService, 
  private authService: AuthenticationService,
  private dataService: DataService,) {
    this.refreshSubscription = this.dataService.refreshTab1$.subscribe(() => {
      this.getCatererDetails();
    });
   }

  ngOnInit() {
    this.getCatererDetails();
  }
  private getCatererDetails = () =>{
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `api/caterers/${id}`;
 
    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.caterer = res as CatererDto;
    },
    (err: HttpErrorResponse) =>{
      this.errorMessage = err.message;
      this.showError = true;
    })
  }
  public onBack(){
    this.router.navigate(['/tabs/tab1']);
  }

  public redirectToDetails = async (id: string) => {
    if (this.modalController) {
      const topModal = await this.modalController.getTop();
      if (topModal) {
        this.modalController.dismiss();
      }
    }
    let url: string = `/tabs/tab1/product/${id}`;
    this.router.navigate([url]);
  }

  async openProductDetails(id:string) {
    const modal = await this.modalController.create({
      component: ProductDetailsPage,
      componentProps: {
        productId: id,
      },
      
    } );
    return await modal.present();
  }

  
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  public redirectToRating = (id: string) => {
    if (this.modalController) {
      this.modalController.dismiss();
    }
    let url: string = `/tabs/tab1/rating/${id}`;
    this.router.navigate([url]);
  }
}
