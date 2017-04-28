import { Routes } from '@angular/router';
import { CustomImagesContainerComponent } from './custom-images-container';
import { CustomImageFormComponent } from './custom-image-form';

export const CUSTOM_IMAGES_ROUTES: Routes = [
    { path: 'custom-images', component: CustomImagesContainerComponent },
    { path: 'custom-image-form', component: CustomImageFormComponent }
];
