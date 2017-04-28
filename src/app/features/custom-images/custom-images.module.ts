import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../../shared';
import { CustomImagesContainerModule } from './custom-images-container';
import { CustomImageFormModule } from './custom-image-form';
// services
import { LoaderBlockService } from '../../core/services';
import { CustomImageService } from './shared';

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        CustomImagesContainerModule,
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
