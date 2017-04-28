import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoaderBlockModule, FooterModule, HeaderModule, LogoModule } from './components';
import {
    LoaderBlockService, AuthService, StorageService, AuthorizedHttp
} from './services';

import { PipesModule } from './pipes';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        HttpModule,
        LoaderBlockModule,
        FooterModule,
        HeaderModule,
        LogoModule,
        PipesModule
    ],
    providers: [
        AuthService,
        StorageService,
        AuthorizedHttp,
        LoaderBlockService
    ],
    exports: [
        FormsModule,
        LoaderBlockModule,
        FooterModule,
        HeaderModule,
        LogoModule,
        PipesModule,
        HttpModule
    ]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
