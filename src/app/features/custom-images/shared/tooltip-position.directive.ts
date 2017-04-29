import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { TooltipPosition } from './custom-image.model';

@Directive({
    selector: '[tooltipPosition]'
})
export class TooltipPositionDirective implements OnInit, OnChanges {
    @Input('tooltipPosition') private position: TooltipPosition;

    constructor(private el: ElementRef) {
    }

    setElementPosition(position) {
        this.el.nativeElement.style.top = position.y + 'px';
        this.el.nativeElement.style.left = position.x + 'px';
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes['position'].isFirstChange()) {
            this.setElementPosition(changes['position'].currentValue);
        }
    }

    ngOnInit(): void {
        this.setElementPosition(this.position);
    }
}
