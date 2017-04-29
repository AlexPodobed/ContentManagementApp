import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CustomImage } from '../shared';

@Component({
    selector: 'custom-image-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./custom-image-item.component.scss')],
    templateUrl: './custom-image-item.component.html'
})
export class CustomImageItemComponent {
    @Input() public item: CustomImage;
    @Output() public onRemove = new EventEmitter<CustomImage>();

    public remove(): void {
        this.onRemove.emit(this.item);
    }
}
