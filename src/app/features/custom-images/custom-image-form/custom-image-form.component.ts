import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { CustomImage, CustomImageService } from '../shared';
import { LoaderBlockService } from '../../../core/services';

@Component({
    selector: 'custom-image-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './custom-image-form.component.html'
})
export class CustomImageFormComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    public customImage: CustomImage;
    public routeParams: any = {};
    public isNewStrategy: boolean;

    constructor(private customImageService: CustomImageService,
                private loaderBlockService: LoaderBlockService,
                private cd: ChangeDetectorRef,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.route.params
                .flatMap((data) => {
                    this.routeParams.id = data['id'];
                    this.isNewStrategy = !data['id'];
                    return this.isNewStrategy
                        ? this.customImageService.getEmptyModel()
                        : this.fetchCustomImage(this.routeParams.id);
                })
                .subscribe((imageModel: CustomImage) => {
                    this.customImage = imageModel;
                    this.cd.markForCheck();
                })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.map((sub) => sub.unsubscribe());
    }

    private fetchCustomImage(id: string): Observable<CustomImage> {
        this.loaderBlockService.show();
        return this.customImageService.get(id)
            .do((imageModel: CustomImage) => this.loaderBlockService.hide());
    }

    public cancel(): void {
        this.router.navigate(['/custom-images']);
    }

    public onSaveSuccess(): void {
        this.loaderBlockService.hide();
        this.router.navigate(['/custom-images']);
    }

    public save(): void {
        let saveMethod = this.isNewStrategy ? 'save' : 'update';
        this.loaderBlockService.show();

        this.subscriptions.push(
            this.customImageService[saveMethod](this.customImage)
                .do(() => this.onSaveSuccess())
                .subscribe()
        );
    }

    public updateImageSrc(url: string): void {
        this.customImage.src = url;
    }

    public changeTooltipPosition(e): void {
        this.customImage.tooltip.position = {
            x: e.offsetX,
            y: e.offsetY
        };
    }

    isDisabled(): boolean {
        return !Boolean(this.customImage.src) || !Boolean(this.customImage.tooltip.text);
    }
}
