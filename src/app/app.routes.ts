import { Routes } from '@angular/router';
import { NoContentComponent } from './features/no-content';
import { HomeComponent } from './features/home';

import { LOGIN_ROUTES } from './features/login';
import { CUSTOM_IMAGES_ROUTES } from './features/custom-images';

export const ROUTES: Routes = [
    ...LOGIN_ROUTES,
    ...CUSTOM_IMAGES_ROUTES,
    { path: '', component: HomeComponent },
    { path: '**', component: NoContentComponent }
];
