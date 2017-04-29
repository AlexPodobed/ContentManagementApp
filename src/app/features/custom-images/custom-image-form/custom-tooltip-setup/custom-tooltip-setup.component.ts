import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tooltip } from '../../shared';

interface Coordinates {
    x: number;
    y: number;
}

@Component({
    selector: 'custom-tooltip-setup',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './custom-tooltip-setup.component.html'
})
export class CustomTooltipSetupComponent {
    @Input() public imageUrl: string;
    @Input() public tooltip: Tooltip;

    public pointerCoords: Coordinates = {x: 0, y: 0};

    addPointer(e): void {
        this.pointerCoords.x = e.offsetX;
        this.pointerCoords.y = e.offsetY;
        console.log(this.pointerCoords);
    }
}
