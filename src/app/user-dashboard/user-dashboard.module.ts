import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAuctionsComponent } from './user-auctions/user-auctions.component';
import { UserAuctionsClosedComponent } from './user-auctions-closed/user-auctions-closed.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFavouritesComponent } from './user-favourites/user-favourites.component';
import { CommonsModule } from 'app/commons/commons.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from 'app/app-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    UserAuctionsComponent,
    UserAuctionsClosedComponent,
    UserDetailsComponent,
    UserFavouritesComponent,
  ],
  imports: [
    CommonModule,
    CommonsModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AppRoutingModule,
  ],
  exports: [
    DashboardComponent,
    UserAuctionsComponent,
    UserAuctionsClosedComponent,
    UserDetailsComponent,
    UserFavouritesComponent,
  ]
})
export class UserDashboardModule { }
