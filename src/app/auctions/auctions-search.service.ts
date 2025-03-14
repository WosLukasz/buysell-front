import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionsSearchRequest, AuctionsSearchResponse } from '../model/auctions.model';
import { environment } from 'environments/environment';
import { AppConstants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuctionsSearchService {

  constructor(private http: HttpClient) {}


  search(searchRequest: AuctionsSearchRequest): Observable<AuctionsSearchResponse> {
    return this.http.post<AuctionsSearchResponse>(environment.serviceUrl + AppConstants.AUCTIONS_SEARCH_API_URL, searchRequest);
  }

}
