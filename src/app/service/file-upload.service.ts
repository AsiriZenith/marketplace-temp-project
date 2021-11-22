import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    Authorization: 'Bearer 46ad3b06-c180-337c-a858-d1e90cb0d077',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  image_upload_url: string;
  private baseUrl = 'http://localhost:9991';

  constructor(private http: HttpClient) {
    this.image_upload_url = `http://localhost:9991/application/uploadImageFile`;
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file, file.name);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post<any>(this.image_upload_url, formData, httpOptions);
  }
}
