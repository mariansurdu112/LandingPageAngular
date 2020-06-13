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
export class ArhitectService {
  private appHost: string;
  private resource = 'api/ArchitectAsync';
  private resourcePortfolioItem = 'api/ArchitectAsync/PortfolioItem/';
  constructor(private http: HttpClient) {
    this.appHost = environment.host;
  }


  getData(): Observable<any> {
    return this.http.get(this.appHost + this.resource);
  }

  saveItem(data: any): Observable<any> {
    return this.http.post(this.appHost + this.resourcePortfolioItem, data, httpOptions);
  }

  saveItemEdit(data: any): Observable<any> {
    console.log(data);
    return this.http.put(this.appHost + this.resourcePortfolioItem + data.id, data, httpOptions);
  }

  removeItem(id: number): Observable<any> {
    return this.http.delete(this.appHost + this.resourcePortfolioItem + id, httpOptions);
  }

  save(data: any): Observable<any> {
    return this.http.post(this.appHost + this.resource, data, httpOptions);
  }

  saveEdit(data: any, id: number): Observable<any> {
    return this.http.put(this.appHost + this.resource + '/' + id, data, httpOptions);
  }
}
