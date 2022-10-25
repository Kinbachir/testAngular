import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http: HttpClient) { }

  users() {
    return this.http.get('https://test.wertkt.com/api/biz/?format=json');
  }
  details() {
    return this.http.get('https://test.wertkt.com/api/result/?format=json');
  }
}
