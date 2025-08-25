import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi, withXsrfConfiguration, HttpClient, HttpClientXsrfModule, HttpClientModule, withInterceptors, HTTP_INTERCEPTORS, HttpXsrfTokenExtractor } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { KeycloakInitializerService } from './services/auth/keycloak-initializer.service';
import { AuctionsModule } from './auctions/auctions.module';
import { CommonsModule } from './commons/commons.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { StaticTranslationLoader } from './static-translations-loader';
import { ViewsModule } from './views/views.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // https://ng-bootstrap.github.io/#/components/accordion/overview
import { HttpXsrfInterceptor } from './interceptors/HttpXsrfInterceptor.service';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({ 
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule, 
        NgbModule,
        AppRoutingModule,
        FormsModule,
        KeycloakAngularModule,
        AuctionsModule,
        CommonsModule,
        ViewsModule,
        UserDashboardModule,
        MatDialogModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: StaticTranslationLoader
            }
        })
        ], 
        providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (keycloakService: KeycloakService, keycloakInitializerService: KeycloakInitializerService) => () => keycloakInitializerService.initialize(keycloakService),
            multi: true,
            deps: [KeycloakService, KeycloakInitializerService],
        },
        provideHttpClient(
            withInterceptorsFromDi(),  
            withXsrfConfiguration({ 
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-XSRF-TOKEN', 
        })),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpXsrfInterceptor,
            deps: [HttpXsrfTokenExtractor],
            multi: true 
        }
    ] 
})
export class AppModule {

}

// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http, './i18n/', '.json');
// }