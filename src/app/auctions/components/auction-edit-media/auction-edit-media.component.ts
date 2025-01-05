import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Attachment } from 'app/model/attachments.model';

export const IMAGES_AMOUNT = 6;

@Component({
  selector: 'app-auction-edit-media',
  templateUrl: './auction-edit-media.component.html'
})
export class AuctionEditMediaComponent implements OnInit {

  @Input() imagesSpaces: Attachment[];

  @Output() imagesUpdated = new EventEmitter<Attachment[]>();

  context = 'auctions';

  constructor() {}

  ngOnInit(): void {
    console.log('AuctionRegistrationComponent.ngOnInit');
    if(!this.imagesSpaces?.length) {
      this.initEmptyImageSpaces();
    }
  }

  private initEmptyImageSpaces(): void {
    this.imagesSpaces = [];
    for(let i = 0 ; i < IMAGES_AMOUNT ; i++) {
      this.imagesSpaces.push({
        main: i === 0,
        order: i,
      });
    }
  }

  onImageUploaded(attachment: Attachment, imageSpace: Attachment): void {
    attachment.main = imageSpace.main;
    attachment.order = imageSpace.order;
    const index = this.imagesSpaces.findIndex((item) => imageSpace.order === item.order);
    this.imagesSpaces[index] = attachment; 
    this.imagesUpdated.emit(this.imagesSpaces);

  }

  imageByOrder(index: number, attachment: Attachment) {
    return attachment.order;
}

}
