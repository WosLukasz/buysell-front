import { Component, OnInit } from '@angular/core';
import { Auction, AuctionsSearchResponse } from 'app/model/auctions.model';
import { AuctionsSearchService } from '../auctions-search.service';

@Component({
  selector: 'app-auctions-search',
  templateUrl: './auctions-search.component.html',
  styleUrls: ['./auctions-search.component.scss']
})
export class AuctionsSearchComponent implements OnInit {

  result: Auction[];

  total: number;

  constructor(private auctionsSearchService: AuctionsSearchService) {}


  ngOnInit(): void {
    this.auctionsSearchService.search().subscribe((result: AuctionsSearchResponse) => {
      this.result = result.auctions;
      this.total = this.total;
    })
  }
}
