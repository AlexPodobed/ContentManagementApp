import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'custom-image-setup',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './custom-image-setup.component.html'
})
export class CustomImageSetupComponent {
}
