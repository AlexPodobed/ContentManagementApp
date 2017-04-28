import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, } from '@angular/core';
import { CustomImage } from '../shared';

@Component({
    selector: 'custom-image-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./custom-image-item.component.scss')],
    templateUrl: './custom-image-item.component.html'
})
export class CustomImageItemComponent implements OnInit {
    @Input() public item: CustomImage;
    @Output() public onRemoved = new EventEmitter<CustomImage>();

    ngOnInit(): void {
        console.log(this.item);
    }

    public remove(): void {
        this.onRemoved.emit(this.item);
    }
}
