import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/user.model';
import { AuthService } from 'app/services/auth/auth.service';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public currentUser: User;

  public isLoggedIn = false;

  menuOptions: {label: string, link: string}[];

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private router: Router
) {}

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((isLoggedIn) => { 
      this.isLoggedIn = isLoggedIn;
      if(isLoggedIn) {
        this.userService.getCurrentUser().subscribe((currentUser) => {
          this.currentUser = currentUser;
        }) 
      }
    }); 

    this.menuOptions = [
      {
        label: 'common.auctions',
        link: 'user-auctions'
      },
      {
        label: 'common.auctionsClosed',
        link: 'user-auctions-closed'
      },
      {
        label: 'common.userFavourites',
        link: 'user-favourites'
      },
      {
        label: 'common.userDetails',
        link: 'user-details'
      },
    ]
  }

  navigateToOtherView(viewLink: string): void {
    this.router.navigate([viewLink]);
  }

}
