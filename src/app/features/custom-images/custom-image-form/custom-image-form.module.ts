import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { CustomImageFormComponent } from './custom-image-form.component';
import { ImageWithTooltipModule } from '../shared';

@NgModule({
    declarations: [
        CustomImageFormComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        CommonModule,
        ImageWithTooltipModule
    ],
    exports: [CustomImageFormComponent]
})
export class CustomImageFormModule {

}
