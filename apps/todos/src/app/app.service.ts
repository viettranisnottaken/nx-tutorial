import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AppUrl {
  name: string;
  url: string;
  urlLogo?: any;
  id?: number;
  index?: number;
}

export interface ServerResponse {
  status?: boolean;
  message?: string;
  httpCode?: number;
  data: AppUrl[];
  errorCode?: string;
}

@Injectable({ providedIn: 'root' })
export class AppService {
  imageToShow: string | ArrayBuffer;

  constructor(private http: HttpClient) {}

  getUrls(api, headers): Observable<AppUrl[]> {
    headers = new HttpHeaders(headers);

    return this.http
      .get<ServerResponse>(api, { headers })
      .pipe(
        map((res: ServerResponse) => {
          res.data.map((appUrl: AppUrl) => {
            this.createImageFromBlob(appUrl.urlLogo);
            appUrl.urlLogo = this.imageToShow;
            return appUrl;
          });

          return res.data;
        })
      );
  }

  private createImageFromBlob(image: Blob | string): void {
    if (!image) {
      this.imageToShow = undefined;
      return;
    }

    if (typeof image === 'string') {
      this.imageToShow = image;
      return;
    }

    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageToShow = reader.result;
      },
      false
    );

    reader.readAsDataURL(image);
  }
}
