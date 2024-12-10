import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi, withXsrfConfiguration, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { KeycloakInitializerService } from './services/auth/keycloak-initializer.service';
import { AuctionsModule } from './auctions/auctions.module';
import { CommonsModule } from './commons/commons.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { StaticTranslationLoader } from './static-translations-loader';
import { ViewsModule } from './views/views.module';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        KeycloakAngularModule,
        AuctionsModule,
        CommonsModule,
        ViewsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: StaticTranslationLoader
            }
        })], providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (keycloakService: KeycloakService, keycloakInitializerService: KeycloakInitializerService) => () => keycloakInitializerService.initialize(keycloakService),
            multi: true,
            deps: [KeycloakService, KeycloakInitializerService],
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClient(withInterceptorsFromDi(), withXsrfConfiguration({
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-XSRF-TOKEN',
        }))
    ] })
export class AppModule {

}

// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http, './i18n/', '.json');
// }