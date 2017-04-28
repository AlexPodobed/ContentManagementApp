import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CustomImageService, CustomImage } from '../shared';

@Component({
    selector: 'custom-images-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./custom-images-container.scss')],
    templateUrl: './custom-images-container.component.html'
})
export class CustomImagesContainerComponent implements OnInit {
    public customImages: Observable<CustomImage[]>;

    constructor(private customImageService: CustomImageService) {
        console.log('1111111111');
    }

    ngOnInit(): void {
        this.customImages = this.customImageService.getAll();
    }
}
