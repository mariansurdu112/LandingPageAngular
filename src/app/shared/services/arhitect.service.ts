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
  private resourcePortfolioItem = 'api/ArchitectAsync/AddPortfolioItem/';
  constructor(private http: HttpClient) {
    this.appHost = environment.host;
  }

  getData(): Observable<any> {
    return this.http.get(this.appHost + this.resource);
  }

  savePortfolioItem(data: any): Observable<any> {
    return this.http.post(this.appHost + this.resourcePortfolioItem, data, httpOptions);
  }

  savePortfolioItemEdit(data: any): Observable<any> {
    return this.http.post(this.appHost + this.resourcePortfolioItem, data, httpOptions);
  }

  removePortfolioItem(id: number): Observable<any> {
    return this.http.delete(this.appHost + this.resourcePortfolioItem + id, httpOptions);
  }

  saveEdit(data: any, id: number): Observable<any> {
    return this.http.put(this.appHost + this.resource + id, data, httpOptions);
  }
}
