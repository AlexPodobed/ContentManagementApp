import { Component, Input } from '@angular/core';
import { CustomImage } from '../custom-image.model';

@Component({
    selector: 'image-with-tooltip',
    styles: [require('./image-with-tooltip.component.scss')],
    templateUrl: './image-with-tooltip.component.html'
})
export class ImageWithTooltipComponent {
    @Input() public item: CustomImage;
    @Input() public showPointer: boolean = false;
}
