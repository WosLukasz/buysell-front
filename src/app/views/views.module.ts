import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuctionsModule } from '../auctions/auctions.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AuctionsModule
  ],
  exports: [HomeComponent]
})
export class ViewsModule { }
