import {
    Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { LoaderBlockService } from '../../../core/services';
import { CustomImage, CustomImageService } from '../shared';

@Component({
    selector: 'custom-image-details',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./custom-image-details.component.scss')],
    templateUrl: './custom-image-details.component.html'
})
export class CustomImageDetailsComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    public customImage: CustomImage;
    public showTooltip: boolean = false;

    constructor(private customImageService: CustomImageService,
                private loaderBlockService: LoaderBlockService,
                private cd: ChangeDetectorRef,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.route.params
                .flatMap((data) => this.fetchCustomImage(data['id']))
                .subscribe()
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.map((sub) => sub.unsubscribe());
    }

    private fetchCustomImage(id: string): Observable<CustomImage> {
        this.loaderBlockService.show();
        return this.customImageService.get(id)
            .do((imageModel: CustomImage) => {
                this.loaderBlockService.hide();
                this.customImage = imageModel;
                this.cd.markForCheck();
            });
    }

    public toggleTooltip(): void {
        this.showTooltip = !this.showTooltip;
    }
}
