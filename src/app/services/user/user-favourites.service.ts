import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'app/constants/app.constants';
import { UserFavourites } from 'app/model/auctions.model';
import { environment } from 'environments/environment';
import { Observable, of, tap } from 'rxjs';
import { StorageService } from '../common/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserFavouritesService {

  private STORAGE_KEY = 'userFavourites';

  constructor(private http: HttpClient, private storageService: StorageService) {}

  getUserFavourites(): Observable<UserFavourites> {
    const userFavourites = this.storageService.getFromSessionStorage(this.STORAGE_KEY) as UserFavourites;
    if (!!userFavourites) {
      return of(userFavourites);
    }

    return this.fetchUserFavourites().pipe(tap((userFavourites) => {
      this.storageService.upsertSessionStorage(this.STORAGE_KEY, userFavourites);
    }));
  }

  refreshFavouritesForCurrentUser() : Observable<UserFavourites> {
    return this.refreshFavourites().pipe(tap((userFavourites) => {
      this.storageService.upsertSessionStorage(this.STORAGE_KEY, userFavourites);
    }));
  }

  addAuctionToFavouritesForCurrentUser(auctionSignature: string): Observable<UserFavourites> {
    return this.addAuctionToFavourites(auctionSignature).pipe(tap((userFavourites) => {
      this.storageService.upsertSessionStorage(this.STORAGE_KEY, userFavourites);
    }));
  }

  removeFromFavouritesForCurrentUser(auctionSignature: string): Observable<UserFavourites> {
    return this.removeAuctionFormFavourites(auctionSignature).pipe(tap((userFavourites) => {
      this.storageService.upsertSessionStorage(this.STORAGE_KEY, userFavourites);
    }));
  }

  private fetchUserFavourites() : Observable<UserFavourites> {
    return this.http.get<UserFavourites>(environment.serviceUrl + AppConstants.AUCTIONS_FAVOURITES_API_URL); 
  }

  private refreshFavourites() : Observable<UserFavourites> {
    return this.http.put<UserFavourites>(environment.serviceUrl + AppConstants.AUCTIONS_FAVOURITES_API_URL + '/refresh', {}); 
  }

  private addAuctionToFavourites(auctionSignature: string) : Observable<UserFavourites> {
    return this.http.post<UserFavourites>(environment.serviceUrl + AppConstants.AUCTIONS_FAVOURITES_API_URL + '/' + auctionSignature, {}); 
  }

  private removeAuctionFormFavourites(auctionSignature: string) : Observable<UserFavourites> {
    return this.http.delete<UserFavourites>(environment.serviceUrl + AppConstants.AUCTIONS_FAVOURITES_API_URL + '/' + auctionSignature, {}); 
  }
}
