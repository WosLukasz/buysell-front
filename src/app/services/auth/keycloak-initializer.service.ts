import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeycloakInitializerService {

  initialize(keycloakService: KeycloakService): Promise<boolean> { 
    return keycloakService.init({
      config: {
        url: environment.authServerUrl,
        realm: environment.authRealm,
        clientId: environment.authCLientName,
      },
      initOptions: {
        pkceMethod: 'S256',
        redirectUri: environment.authRedirectUrl,
      },loadUserProfileAtStartUp: false
    });
  }
}
