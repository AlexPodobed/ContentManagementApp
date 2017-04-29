import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomImageItemComponent } from './custom-image-item.component';
import { ImageWithTooltipModule } from '../shared';

@NgModule({
    declarations: [CustomImageItemComponent],
    imports: [
        RouterModule,
        CommonModule,
        ImageWithTooltipModule
    ],
    exports: [CustomImageItemComponent]
})
export class CustomImageItemModule {

}
