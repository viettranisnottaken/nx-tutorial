import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUrl, ServerResponse } from './models';

export class SystemNavigatorServiceConfig {
  api: string;
  headers?: any;
}

@Injectable()
export class SystemNavigatorService {
  api: string;
  headers: any;
  imageToShow: string | ArrayBuffer;

  constructor(
    public http: HttpClient,
    @Optional() @Inject(SystemNavigatorServiceConfig) config?: SystemNavigatorServiceConfig
  ) {
    if (config) {
      this.api = config.api;
      this.headers = config.headers;
    }
  }

  getUrls(): Observable<ServerResponse> {
    const headers = new HttpHeaders(this.headers);

    return this.http
      .get<ServerResponse>(this.api, { headers })
      .pipe(
        map((res: ServerResponse) => {
          res.data.map((appUrl: AppUrl) => {
            this.createImageFromBlob(appUrl.image);
            appUrl.image = this.imageToShow;
            return appUrl;
          });

          return res;
        })
      );
  }

  private createImageFromBlob(image: Blob | string) {
    if (!image) {
      this.imageToShow = undefined;
      return;
    }

    if (typeof image === 'string') {
      this.imageToShow = image;
      return;
    }

    const reader = new FileReader();
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
