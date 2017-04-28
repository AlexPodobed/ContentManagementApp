import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomImageItemModule } from '../custom-image-item';

import { CustomImagesContainerComponent } from './custom-images-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CustomImagesContainerComponent],
    imports: [
        RouterModule,
        CommonModule,
        CustomImageItemModule
    ],
    providers: [],
    exports: [CustomImagesContainerComponent]
})
export class CustomImagesContainerModule {
}
