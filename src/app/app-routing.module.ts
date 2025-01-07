import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './commons/contact/contact.component';
import { DashboardComponent } from './user-dashboard/dashboard/dashboard.component';
import { AuthKeyClockGuard } from './services/auth/auth.route';
import { HomeComponent } from './views/home/home.component';
import { AuctionRegistrationComponent } from './auctions/auction-registration/auction-registration.component';
import { AuctionViewComponent } from './auctions/auction-view/auction-view.component';
import { UserAuctionsComponent } from './user-dashboard/user-auctions/user-auctions.component';
import { UserAuctionsClosedComponent } from './user-dashboard/user-auctions-closed/user-auctions-closed.component';
import { UserFavouritesComponent } from './user-dashboard/user-favourites/user-favourites.component';
import { UserDetailsComponent } from './user-dashboard/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'auction/:signature', component: AuctionViewComponent},
  { path: 'new-auction', component: AuctionRegistrationComponent, canActivate: [AuthKeyClockGuard],data: {roles: ['USER']}},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthKeyClockGuard],data: {roles: ['USER']}},
  { path: 'user-auctions', component: UserAuctionsComponent, canActivate: [AuthKeyClockGuard],data: {roles: ['USER']}},
  { path: 'user-auctions-closed', component: UserAuctionsClosedComponent, canActivate: [AuthKeyClockGuard],data: {roles: ['USER']}},
  { path: 'user-favourites', component: UserFavouritesComponent, canActivate: [AuthKeyClockGuard],data: {roles: ['USER']}},
  { path: 'user-details', component: UserDetailsComponent, canActivate: [AuthKeyClockGuard],data: {roles: ['USER']}},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
