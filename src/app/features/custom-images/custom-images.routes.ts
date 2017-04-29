import { Routes } from '@angular/router';
import { CustomImagesContainerComponent } from './custom-images-container';
import { CustomImageFormComponent } from './custom-image-form';
import { CustomImageDetailsComponent } from './custom-image-details';

import { AuthGuard } from '../../core/services';

export const CUSTOM_IMAGES_ROUTES: Routes = [
    { path: 'custom-images', component: CustomImagesContainerComponent, canActivate: [AuthGuard] },
    { path: 'custom-images/:id', component: CustomImageDetailsComponent, canActivate: [AuthGuard] },
    { path: 'custom-image/new', component: CustomImageFormComponent, canActivate: [AuthGuard] },
    { path: 'custom-image/update/:id', component: CustomImageFormComponent, canActivate: [AuthGuard] }
];
