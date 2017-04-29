import { Component, EventEmitter, Output } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

@Component({
    selector: 'sh-image-uploader',
    styles: [require('./image-uploader.component.scss')],
    templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent {
    private static CLOUD_NAME: string = 'podobed';
    private static PRESET_NAME: string = 'dcoqkmka';

    @Output() public onSuccessUpload = new EventEmitter<string>();

    public hasBaseDropZoneOver: boolean = false;
    public uploading: boolean = false;
    public uploader: CloudinaryUploader;

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    constructor() {
        let claudinaryOptions = new CloudinaryOptions({
            cloudName: ImageUploaderComponent.CLOUD_NAME,
            uploadPreset: ImageUploaderComponent.PRESET_NAME
        });

        this.uploader = new CloudinaryUploader(claudinaryOptions);

        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            this.onSuccessUpload.emit(res.url);
            this.uploading = false;

            return { item, response, status, headers };
        };
    }

    upload(): void {
        this.uploading = true;
        this.uploader.uploadAll();
    }
}
