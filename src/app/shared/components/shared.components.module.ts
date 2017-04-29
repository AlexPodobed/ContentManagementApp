import { NgModule } from '@angular/core';

import { ImageUploaderModule } from './image-uploader';
import { NoResultModule } from './no-results';
import { TooltipModule } from './tooltip';

@NgModule({
    imports: [
        ImageUploaderModule,
        NoResultModule,
        TooltipModule
    ],
    exports: [
        ImageUploaderModule,
        NoResultModule,
        TooltipModule
    ]
})

export class SharedComponentsModule {
}
