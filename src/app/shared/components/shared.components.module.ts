import { NgModule } from '@angular/core';
import { NoResultModule } from './no-results';

@NgModule({
    imports: [
        NoResultModule
    ],
    exports: [
        NoResultModule
    ]
})

export class SharedComponentsModule {
}
