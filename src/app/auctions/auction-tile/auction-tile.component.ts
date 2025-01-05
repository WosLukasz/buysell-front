import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'app/model/auctions.model';
import { FilesClientService } from 'app/services/minio/files-client.service';
import { AuctionsService } from '../auctions.service';
import { Attachment } from 'app/model/attachments.model';

@Component({
  selector: 'app-auction-tile',
  templateUrl: './auction-tile.component.html',
  styleUrls: ['./auction-tile.component.scss']
})
export class AuctionTileComponent implements OnInit {

  @Input() auction: Auction;

  imageUrl: string | undefined;

  attachmentsToDisplay: Attachment[];

  constructor(private auctionService: AuctionsService, private filesClientService: FilesClientService) {}

  ngOnInit(): void {
    this.imageUrl = FilesClientService.getMainImageUrl(this.auction.attachments);
    this.attachmentsToDisplay = this.auction?.attachments
                                  .filter((attachment) => !!attachment.id && !attachment.main)
                                  .sort((a, b) => a.order - b.order);

  }

  openAuctionView(): void {
    this.auctionService.openAuctionView(this.auction.signature);
  }

  prepareAttachmentImageUrl(attachment: Attachment) : string | undefined {
    return FilesClientService.prepareUrl(attachment);
  }

}
