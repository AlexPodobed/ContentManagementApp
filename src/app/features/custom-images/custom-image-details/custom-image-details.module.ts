import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomImageDetailsComponent  } from './custom-image-details.component';
import { ImageWithTooltipModule } from '../shared';

@NgModule({
    declarations: [CustomImageDetailsComponent ],
    imports: [
        RouterModule,
        CommonModule,
        ImageWithTooltipModule
    ],
    exports: [CustomImageDetailsComponent ]
})
export class CustomImageDetailsModule {

}
