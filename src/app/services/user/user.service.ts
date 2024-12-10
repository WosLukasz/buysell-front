import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { switchMap, Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../environments/environment';
import { AppConstants } from "../../constants/app.constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly authService: AuthService, private http: HttpClient) { }

  isUserLoggedIn(): Observable<boolean> {
    return this.authService.isLoggedIn();
  }

  getCurrentUser(): Observable<User | undefined> {
    return this.isUserLoggedIn().pipe(switchMap((isLoggedIn) => {
      if (!isLoggedIn) {
          return of(undefined);
      }

      return this.getCurrentUserDetails();
    }));

  }

  getCurrentUserDetails(): Observable<User> {
    return this.http.get<User>(environment.serviceUrl + AppConstants.USERTS_API_URL, { withCredentials: true });
  }

}
