import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { CustomImage } from './custom-image.model';

@Injectable()
export class CustomImageService {
    private static BASE_URL: string = 'http://angular2.getsandbox.com/custom-images';

    constructor(private http: Http) {

    }

    getAll(): Observable<CustomImage[]> {
        return this.http.get(CustomImageService.BASE_URL)
            .map((res: Response) => res.json());
    }

    get(id: string) {
        console.log('TBD');
    }

    save(customImage: CustomImage) {
        console.log('TBD');
    }

    update(customImage: CustomImage) {
        console.log('TBD');
    }

    remove(id: string) {
        console.log('TBD');
    }
}
