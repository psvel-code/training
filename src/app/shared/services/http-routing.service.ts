import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutingService {
  appUrl = environment.app_url;
  constructor(private http: HttpClient) { }
  // getJson(url: string) {
  //   return this.http.get('./assets/' + url);
  // }
  getMethod(url: any) {
    return this.http.get(url + 'getDesignation');
  }
  getRole(url: any) {
    return this.http.get(url + 'getRole');
  }
}
