import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';

import { ImageUploaderComponent } from './image-uploader.component';


@NgModule({
    declarations: [ImageUploaderComponent],
    imports: [
        CommonModule,
        FileUploadModule,
        Ng2CloudinaryModule
    ],
    exports: [ImageUploaderComponent]
})
export class ImageUploaderModule {

}
