import { NgModule } from '@angular/core';
import { NoResultModule } from './no-results';

import { ImageUploaderModule } from './image-uploader';

@NgModule({
    imports: [
        NoResultModule,
        ImageUploaderModule
    ],
    exports: [
        NoResultModule,
        ImageUploaderModule
    ]
})

export class SharedComponentsModule {
}
