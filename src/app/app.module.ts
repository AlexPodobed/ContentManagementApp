import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ENV_PROVIDERS } from './environment';
// routes
import { ROUTES } from './app.routes';
// modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// features
import { LoginModule } from './features/login';
import { HomeComponent } from './features/home';
// components
import { NoContentComponent } from './features/no-content';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NoContentComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: false }),
        CoreModule,
        SharedModule,
        LoginModule
    ],
    providers: [
        ENV_PROVIDERS
    ]
})
export class AppModule {
}
