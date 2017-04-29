import { Routes } from '@angular/router';
import { NoContentComponent } from './features/no-content';
import { HomeComponent } from './features/home';

import { LOGIN_ROUTES } from './features/login';
import { CUSTOM_IMAGES_ROUTES } from './features/custom-images';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'redirect', redirectTo: 'home', pathMatch: 'full' },

    ...LOGIN_ROUTES,
    ...CUSTOM_IMAGES_ROUTES,
    { path: '**', component: NoContentComponent }
];
