import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/model/auctions.model';
import { FilesClientService } from 'src/app/services/minio/files-client.service';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-auction-tile',
  templateUrl: './auction-tile.component.html',
  styleUrls: ['./auction-tile.component.scss']
})
export class AuctionTileComponent implements OnInit {

  @Input() auction: Auction;

  constructor(private auctionService: AuctionsService, private filesClientService: FilesClientService) {}

  ngOnInit(): void {
    console.log('auction', this.auction);  
    this.getMainImage();
  }

  openAuctionView(): void {
    this.auctionService.openAuctionView(this.auction.signature);
  }


  getMainImage() {
    const attachment = this.auction.attachments.find((item) => item.main === true);
    if(!attachment) {
      return null;
    }

    return this.filesClientService.fetchFile(attachment).subscribe((imageContent) => {
      console.log('imageContent', imageContent); 
    })


  }

}
