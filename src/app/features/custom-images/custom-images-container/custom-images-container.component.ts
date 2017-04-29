import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { CustomImageService, CustomImage } from '../shared';
import { LoaderBlockService } from '../../../core/services';

@Component({
    selector: 'custom-images-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./custom-images-container.scss')],
    templateUrl: './custom-images-container.component.html'
})
export class CustomImagesContainerComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    public customImages$: Observable<CustomImage[]>;

    constructor(private customImageService: CustomImageService,
                private loaderBlockService: LoaderBlockService,
                private cd: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.fetchImages();
    }

    ngOnDestroy(): void {
        this.subscriptions.map((sub) => sub.unsubscribe());
    }

    public fetchImages(): void {
        this.loaderBlockService.show();
        this.customImages$ = this.customImageService.getAll()
            .do(() => this.loaderBlockService.hide())
            .catch((e) => {
                this.loaderBlockService.hide();
                return e;
            });
    }

    public remove(customImage: CustomImage): void {
        if (window.confirm('are you sure')) {
            this.subscriptions.push(
                this.customImageService.remove(customImage.id)
                    .do(() => {
                        this.cd.markForCheck();
                        this.fetchImages();
                    })
                    .subscribe()
            );
        }
    }
}
