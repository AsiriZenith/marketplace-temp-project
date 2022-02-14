import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  constructor(private httpClient: HttpClient) {}

  getAssetsDetails(): Observable<any> {
    const url = '../../assets/json/assetes_types.json';
    return this.httpClient.get<any>(url);
  }

  getApiDetails(): Observable<any> {
    const url = '../../assets/json/apis_details.json';
    return this.httpClient.get<any>(url);
  }
}
