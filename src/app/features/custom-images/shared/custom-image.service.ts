import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { CustomImage } from './custom-image.model';

@Injectable()
export class CustomImageService {
    private static BASE_URL: string = 'http://angular2.getsandbox.com/custom-images';

    constructor(private http: Http) {
    }

    getEmptyModel(): Observable<CustomImage> {
        return Observable.of({
            src: '',
            tooltip: {
                text: '',
                position: {
                    x: 0,
                    y: 0
                }
            }
        });
    }

    getAll(): Observable<CustomImage[]> {
        return this.http.get(CustomImageService.BASE_URL)
            .map((res: Response) => res.json())
            .retry(2);
    }

    get(id: string): Observable<CustomImage> {
        return this.http.get(`${CustomImageService.BASE_URL}/${id}`)
            .map((res: Response) => res.json());
    }

    save(customImage: CustomImage): Observable<CustomImage> {
        return this.http.post(CustomImageService.BASE_URL, customImage)
            .map((res: Response) => res.json());
    }

    update(customImage: CustomImage): Observable<CustomImage> {
        return this.http.put(`${CustomImageService.BASE_URL}/${customImage.id}`, customImage)
            .map((res: Response) => res.json());
    }

    remove(id: string): Observable<CustomImage> {
        return this.http.delete(`${CustomImageService.BASE_URL}/${id}`)
            .map((res: Response) => res.json());
    }
}
