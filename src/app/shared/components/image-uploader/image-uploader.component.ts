import { Component, EventEmitter, Output } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

@Component({
    selector: 'sh-image-uploader',
    styles: [require('./image-uploader.component.scss')],
    templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent {
    @Output() public onSuccessUpload = new EventEmitter<string>();

    public hasBaseDropZoneOver: boolean = false;
    public uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({ cloudName: 'podobed', uploadPreset: 'dcoqkmka' })
    );

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    constructor() {
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            this.onSuccessUpload.emit(res.url);
            return { item, response, status, headers };
        };
    }

    upload(): void {
        this.uploader.uploadAll();
    }
}
