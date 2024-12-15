import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuctionsModule } from '../auctions/auctions.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AuctionsModule,
    AppRoutingModule
  ],
  exports: [HomeComponent]
})
export class ViewsModule { }
