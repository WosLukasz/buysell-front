import { Component, OnInit } from '@angular/core';
import { Auction, AuctionsSearchRequest, AuctionsSearchResponse } from 'app/model/auctions.model';
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
    const searchRequest = { 
      // priceFrom: 0, 
      // priceTo: 30000,
      // text: 'quad',
      offset: 0,
      pageSize: 4,
      // sortBy: 'signature',
      sortOrder: 'Asc'
    } as AuctionsSearchRequest;


    this.auctionsSearchService.search(searchRequest).subscribe((result: AuctionsSearchResponse) => {
      this.result = result.auctions;
      this.total = this.total;
    })
  }
}
