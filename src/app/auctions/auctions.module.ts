import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuctionRegistrationComponent } from './auction-registration/auction-registration.component';
import { AuctionEditMediaComponent } from './components/auction-edit-media/auction-edit-media.component';
import { AuctionEditCategoryDataComponent } from './components/auction-edit-category-data/auction-edit-category-data.component';
import { AuctionEditSellerDataComponent } from './components/auction-edit-seller-data/auction-edit-seller-data.component';
import { AuctionEditGeneralDataComponent } from './components/auction-edit-general-data/auction-edit-general-data.component';
import { CommonsModule } from './../commons/commons.module';
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuctionsSearchComponent } from './auctions-search/auctions-search.component';
import { AuctionsListComponent } from './auctions-list/auctions-list.component';
import { AuctionTileComponent } from './auction-tile/auction-tile.component';
import { AuctionViewComponent } from './auction-view/auction-view.component';
import { AuctionEditComponent } from './auction-edit/auction-edit.component';
import { AuctionsSearchFiltersComponent } from './auctions-search-filters/auctions-search-filters.component';

@NgModule({
  declarations: [
    AuctionRegistrationComponent,
    AuctionEditMediaComponent,
    AuctionEditCategoryDataComponent,
    AuctionEditSellerDataComponent,
    AuctionEditGeneralDataComponent,
    AuctionsSearchComponent,
    AuctionsListComponent,
    AuctionTileComponent,
    AuctionViewComponent,
    AuctionEditComponent,
    AuctionsSearchFiltersComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [AuctionsSearchComponent]
})
export class AuctionsModule { }
