import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../../shared';
import { CustomImagesContainerModule } from './custom-images-container';
import { CustomImageFormModule } from './custom-image-form';
import { CustomImageDetailsModule } from './custom-image-details';
// services
import { LoaderBlockService } from '../../core/services';
import { CustomImageService } from './shared';

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        CustomImagesContainerModule,
        CustomImageDetailsModule,
        CustomImageFormModule
    ],
    providers: [
        LoaderBlockService,
        CustomImageService
    ],
    exports: []
})

export class CustomImagesModule {
}
