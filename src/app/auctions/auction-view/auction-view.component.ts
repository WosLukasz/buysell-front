import { Component, Input, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions.service';
import { Auction } from 'app/model/auctions.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auction-view',
  templateUrl: './auction-view.component.html',
  styleUrls: ['./auction-view.component.scss']
})
export class AuctionViewComponent implements OnInit {

  signature: string;

  auction: Auction;

  constructor(private auctionService: AuctionsService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.signature = this.route.snapshot.paramMap.get('signature') as string;
    console.log('this.signature', this.signature);
    this.auctionService.get(this.signature).subscribe((auction) => {
      this.auction = auction;
    })
  }

}
