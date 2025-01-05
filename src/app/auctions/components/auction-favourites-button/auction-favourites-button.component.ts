import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { UserFavouritesService } from 'app/services/user/user-favourites.service';

@Component({
  selector: 'app-auction-favourites-button',
  templateUrl: './auction-favourites-button.component.html',
  styleUrl: './auction-favourites-button.component.scss'
})
export class AuctionFavouritesButtonComponent implements OnInit{

  @Input() auctionSignature: string;

  isFavourite = false;

  hideButtons = true;

  constructor(private userFavouritesService: UserFavouritesService, private authService: AuthService){}


  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((isLoggedIn) => { 
      if(isLoggedIn) {
        this.hideButtons = false;
        this.initFavourites();
      } else {
        this.hideButtons = true;
      }
    });
  }

  initFavourites(): void {
    this.userFavouritesService.getUserFavourites().subscribe((userFavourites) => {
      if(!userFavourites || !userFavourites.auctions) {
        this.isFavourite = false;
      }

      this.isFavourite = userFavourites.auctions.includes(this.auctionSignature);
  });
  }

  addToFavourites(): void {
    this.userFavouritesService.addAuctionToFavouritesForCurrentUser(this.auctionSignature).subscribe(() => {
      this.isFavourite = true;
    });
  }

  removeFromFavourites(): void {
    this.userFavouritesService.removeFromFavouritesForCurrentUser(this.auctionSignature).subscribe(() => {
      this.isFavourite = false;
    });
  }


}
