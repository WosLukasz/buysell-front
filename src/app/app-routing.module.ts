import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './commons/contact/contact.component';
import { DashboardComponent } from './commons/dashboard/dashboard.component';
import { AuthKeyClockGuard } from './services/auth/auth.route';
import { HomeComponent } from './views/home/home.component';
import { AuctionRegistrationComponent } from './auctions/auction-registration/auction-registration.component';
import { AuctionViewComponent } from './auctions/auction-view/auction-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'auction/:signature', component: AuctionViewComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthKeyClockGuard],data: {roles: ['USER']}},
  { path: 'new-auction', component: AuctionRegistrationComponent, canActivate: [AuthKeyClockGuard],data: {roles: ['USER']}},
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
