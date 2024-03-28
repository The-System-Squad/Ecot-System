import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CaterersPage } from './caterers/caterers.page';
import { CatererDetailsPage } from './caterer-details/caterer-details.page';
import { ProductDetailsPage } from './product-details/product-details.page';
import { StarRatingPage } from './star-rating/star-rating.page';
import { RatingPage } from './rating/rating.page';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [Tab1Page,CaterersPage,CatererDetailsPage,ProductDetailsPage,StarRatingPage,RatingPage]
})
export class Tab1PageModule {}
