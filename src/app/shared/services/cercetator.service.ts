import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    })
};
@Injectable({
  providedIn: 'root'
})
export class CercetatorService {
  private appHost: string;
  private resourceGetData: string;
  private resourceSaveDetails: string;
  private resourceSaveItems: string;
  private resourceEditItem: string;
  constructor(private http: HttpClient) {
    this.appHost = environment.host;
  }

  getData(data: any): Observable<any> {
    return this.http.post(this.appHost + this.resourceGetData, data, httpOptions);
  }

  saveDetails(): Observable<any> {
    return this.http.get(this.appHost + this.resourceSaveDetails, httpOptions);
  }

  saveItems(data: any): Observable<any> {
    return this.http.post(this.appHost + this.resourceSaveItems, data, httpOptions);
  }

  saveEdit(data: any, id: number): Observable<any> {
    return this.http.post(this.appHost + this.resourceEditItem + id, data, httpOptions);
  }
}
