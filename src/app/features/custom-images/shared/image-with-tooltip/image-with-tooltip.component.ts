import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CustomImage } from '../custom-image.model';

@Component({
    selector: 'image-with-tooltip',
    styles: [require('./image-with-tooltip.component.scss')],
    templateUrl: './image-with-tooltip.component.html'
})
export class ImageWithTooltipComponent implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }

    @Input() public item: CustomImage;
    @Input() public showPointer: boolean = false;
}
