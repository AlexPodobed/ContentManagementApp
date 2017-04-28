import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tooltip, CustomImage } from '../shared';

@Component({
    selector: 'custom-image-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './custom-image-form.component.html'
})
export class CustomImageFormComponent implements OnInit {

    public activeTab: string = 'image';
    public tabs: string[] = ['image', 'tooltip'];
    public imageUrl: string = 'http://forex.info/wp-content/uploads/2015/05/gallaxy-187788133-667x400.jpg';

    public customImage: CustomImage;

    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.customImage = {
            src: this.imageUrl,
            tooltip: {
                text: 'hello world',
                position: {
                    x: 0,
                    y: 0
                }
            }
        };
    }

    cancel(): void {
        console.log('canceled');
    }

    save(e): void {
        e.preventDefault();

        console.log('saved');
    }

    goToTooltipSetup(url) {
        console.log(url);
        this.imageUrl = url;
        this.setActiveTab('tooltip');
    }

    setActiveTab(tab: string): void {
        this.activeTab = tab;
    }

    addPointer(e): void {
        this.customImage.tooltip.position = {
            x: e.offsetX,
            y: e.offsetY
        };
    }
}
