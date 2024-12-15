import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attachment, Auction, AuctionCreationRequest, ContactInformation, AttachmentSaveRequest } from '../model/auctions.model';
import { environment } from 'environments/environment';
import { AppConstants } from '../constants/app.constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private http: HttpClient, private router: Router) {}

  get(signature: string): Observable<Auction> {
    return this.http.get<Auction>(environment.serviceUrl + AppConstants.AUCTIONS_API_URL + '/' + signature);
  } 

  openAuctionView(signature: string): void {
    this.router.navigate(['/auction', signature]);
  }

  createAuction(request: AuctionCreationRequest) : Observable<Auction> {
    return this.http.post<Auction>(environment.serviceUrl + AppConstants.AUCTIONS_API_URL, request); 
  }

  convertToAcutionCreationRequest(formValuses: any, images: Attachment[]): AuctionCreationRequest {
    console.log('formValuses', formValuses);

    const phone = this.prepareContactInformation(formValuses.phone, 'PHONE');
    const email = this.prepareContactInformation(formValuses.email, 'EMAIL');
    const price = {
      currency: 'PLN',
      value: formValuses.price,
    };
    const seller = {
      firstname: formValuses.firstname,
      name: formValuses.name,
      location: formValuses.location,
      contactInformation: [phone, email],
    };

    return {
      title: formValuses.title,
      description: formValuses.description,
      categoryId: formValuses.category,
      price: price,
      attachments: images,
      seller: seller,
    };
  }


  private prepareContactInformation(value: string, type: string) : ContactInformation {
    return {
      type: type,
      value: value,
    }
  }

}
