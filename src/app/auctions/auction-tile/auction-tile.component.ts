import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'app/model/auctions.model';
import { FilesClientService } from 'app/services/minio/files-client.service';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-auction-tile',
  templateUrl: './auction-tile.component.html',
  styleUrls: ['./auction-tile.component.scss']
})
export class AuctionTileComponent implements OnInit {

  @Input() auction: Auction;

  imageUrl: string | undefined;

  constructor(private auctionService: AuctionsService, private filesClientService: FilesClientService) {}

  ngOnInit(): void {
    console.log('auction', this.auction);  
    this.imageUrl = FilesClientService.getMainImageUrl(this.auction.attachments);
  }

  openAuctionView(): void {
    this.auctionService.openAuctionView(this.auction.signature);
  }




}
