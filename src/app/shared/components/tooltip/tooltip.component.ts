import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'sh-tooltip',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./tooltip.component.scss')],
    templateUrl: './tooltip.component.html'
})
export class TooltipComponent {
    @Input() public text: string;
}
