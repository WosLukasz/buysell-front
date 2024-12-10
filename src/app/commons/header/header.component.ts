import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public currentUser: User | undefined;

  public isLoggedIn = false;

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private translate: TranslateService) {
      
     }

  public ngOnInit() {
    this.refreshAuthData();
  } 

  public login(): void {
    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }

  public changeLanguage(language: string): void {
    this.translate.use(language);
  }

  private refreshAuthData(): void {
    const userProfile = this.authService.getCurrentProfile();
    console.log('HeaderComponent.ngOnInit: userProfile', userProfile); 
    this.userService.getCurrentUser().subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.isLoggedIn = !!currentUser;
      console.log("HeaderComponent.ngOnInit: isLoggedIn", this.isLoggedIn); 
      console.log("HeaderComponent.ngOnInit: currentUser", currentUser);
    }); 
  }
}
