import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './footer.component.html',
    styles: [require('./footer.component.scss')]
})
export class FooterComponent {

}
