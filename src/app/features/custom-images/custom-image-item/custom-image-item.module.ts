import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomImageItemComponent } from './custom-image-item.component';
import { ImageWithTooltipModule } from '../shared';

@NgModule({
    declarations: [CustomImageItemComponent],
    imports: [CommonModule, ImageWithTooltipModule],
    exports: [CustomImageItemComponent]
})
export class CustomImageItemModule {

}
