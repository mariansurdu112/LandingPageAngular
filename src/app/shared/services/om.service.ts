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
export class OmService {
  private appHost: string;
  private resource = 'api/OmAsync';
  constructor(private http: HttpClient) {
    this.appHost = environment.host;
  }

  getData(data: any): Observable<any> {
    return this.http.get(this.appHost + this.resource, data);
  }

  saveEdit(data: any, id: number): Observable<any> {
    return this.http.put(this.appHost + this.resource + id, data, httpOptions);
  }
}
