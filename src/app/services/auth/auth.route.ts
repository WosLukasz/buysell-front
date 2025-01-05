import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class AuthKeyClockGuard extends KeycloakAuthGuard {

  constructor(
    protected override readonly router: Router,
    protected readonly keycloakService: KeycloakService,
    private readonly authService: AuthService
  ) {
    super(router, keycloakService);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (!this.authenticated) {
      await this.keycloakService.login({
        redirectUri: window.location.origin + state.url,
      });
    } else {
        let userProfile = await this.keycloakService.loadUserProfile();
        this.authService.saveUserInSessionStorageAfterLogin(userProfile);
    }

    // Get the roles required from the route.
    const requiredRoles = route.data["roles"];

    // Allow the user to proceed if no additional roles are required to access the route. 
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }
    
    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.some((role) => this.roles.includes(role));
  }
}