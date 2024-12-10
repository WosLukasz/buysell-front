import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public currentUser: User | undefined;

  public isLoggedIn = false;

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService) {
      
     }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((isLoggedIn) => { 
      console.log("HeaderComponent.ngOnInit: isLoggedIn", isLoggedIn);
      this.isLoggedIn = isLoggedIn;
      if(isLoggedIn) {
        this.userService.getCurrentUser().subscribe((currentUser) => {
          console.log("HeaderComponent.ngOnInit: currentUser", currentUser);
          this.currentUser = currentUser;
        }) 
      }
    }); 
  }

}
