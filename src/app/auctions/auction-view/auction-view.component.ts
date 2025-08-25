import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions.service';
import { Auction } from 'app/model/auctions.model';
import { ActivatedRoute } from '@angular/router';
import { FilesClientService } from 'app/services/minio/files-client.service';
import { forkJoin } from 'rxjs';
import { Attachment } from 'app/model/attachments.model';

@Component({
  selector: 'app-auction-view',
  templateUrl: './auction-view.component.html',
  styleUrls: ['./auction-view.component.scss']
})
export class AuctionViewComponent implements OnInit {

  signature: string;

  auction: Auction;

  attachmentsToDisplay: Attachment[];

  views: number;

  constructor(private auctionService: AuctionsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.signature = this.route.snapshot.paramMap.get('signature') as string;

    forkJoin({
      auction: this.auctionService.get(this.signature), 
      views: this.auctionService.incrementView(this.signature)})
    .subscribe((response) => {
      this.auction = response.auction;
      this.views = response.views;
      this.prepareAttachmentsToDisplay();
    })
  }

  private prepareAttachmentsToDisplay() {
    this.attachmentsToDisplay = this.auction?.attachments
      .filter((attachment) => !!attachment.etag)
      .sort((a, b) => a.order - b.order);
  }

  prepareAttachmentImageUrl(attachment: Attachment) : string | undefined {
    return FilesClientService.prepareUrl(attachment);
  }

}
