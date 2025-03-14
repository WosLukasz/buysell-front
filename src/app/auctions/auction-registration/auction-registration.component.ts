import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { AuctionsService } from '../auctions.service';
import { Attachment } from 'app/model/attachments.model';


@Component({
  selector: 'app-auction-registration',
  templateUrl: './auction-registration.component.html'
})
export class AuctionRegistrationComponent {
  auctionForm: FormGroup;

  images: Attachment[];

  constructor(private fb: FormBuilder, private auctionsService: AuctionsService) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.auctionForm = this.fb.group({});
  }

  imagesUpdated(images: Attachment[]): void {
    this.images = images;
  }

  cancel(): void {
    // confirm if sure 
    // move to home
  }

  save(): void {
    this.auctionForm.updateValueAndValidity();
    if(!this.auctionForm.valid) {
      return;
    }

    const request = this.auctionsService.convertToAcutionCreationRequest(this.auctionForm.value, this.images);

    this.auctionsService.createAuction(request).subscribe((auction) => {
      this.auctionsService.openAuctionView(auction.signature);
    })
  }


  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json',
  //   });

  //   return this.http.request(req);
  // }

  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/files`);
  // }


}
