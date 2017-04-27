import { Routes } from '@angular/router';
import { NoContentComponent } from './features/no-content';
import { HomeComponent } from './features/home';

import { LOGIN_ROUTES } from './features/login';

export const ROUTES: Routes = [
    ...LOGIN_ROUTES,
    { path: '', component: HomeComponent },
    { path: '**', component: NoContentComponent }
];
