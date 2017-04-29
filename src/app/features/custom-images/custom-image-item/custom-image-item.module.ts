import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomImageItemComponent } from './custom-image-item.component';

@NgModule({
    declarations: [CustomImageItemComponent],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [CustomImageItemComponent]
})
export class CustomImageItemModule {

}
