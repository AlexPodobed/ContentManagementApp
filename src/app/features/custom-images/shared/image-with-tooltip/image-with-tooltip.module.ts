import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageWithTooltipComponent } from './image-with-tooltip.component';
import { TooltipPositionDirective } from '../tooltip-position.directive';
import { SharedModule } from '../../../../shared';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        TooltipPositionDirective,
        ImageWithTooltipComponent
    ],
    exports: [
        ImageWithTooltipComponent
    ]
})
export class ImageWithTooltipModule {

}
