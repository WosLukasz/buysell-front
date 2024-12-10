import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { from, Observable, of } from 'rxjs';
import { AuthProfile } from 'src/app/model/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly keycloak: KeycloakService) { }

  public login(): void {
    this.keycloak.login(); 
  }

  public logout(): void {
    window.sessionStorage.removeItem("userDetails"); 
    this.keycloak.logout(environment.authRedirectUrl); 
  }
 
  public saveUserInSessionStorageAfterLogin(userProfile: AuthProfile): void {
    console.log('AuthService.saveUserInSessionStorageAfterLOgin: userProfile', userProfile); 
    window.sessionStorage.setItem("userDetails", JSON.stringify(userProfile));
  }

  public getCurrentProfile(): AuthProfile {
    return JSON.parse(sessionStorage.getItem('userDetails') || '{}'); 
  }

  public isLoggedIn(): Observable<boolean> {
    return of(this.keycloak.isLoggedIn());
  }

  public getUserProfile(): Observable<AuthProfile> {
    return from(this.keycloak.loadUserProfile());
  }
}
