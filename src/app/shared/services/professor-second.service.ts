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
export class ProfesorSecondService {
  private appHost: string;
  private resource = 'api/ProfessorSecondAsync';
  private resourceStoryItem = 'api/ProfessorSecondAsync/StoryItem/';
  constructor(private http: HttpClient) {
    this.appHost = environment.host;
  }

  getData(): Observable<any> {
    return this.http.get(this.appHost + this.resource);
  }

  saveStoryPointItem(data: any): Observable<any> {
    return this.http.post(this.appHost + this.resourceStoryItem, data, httpOptions);
  }

  saveStoryPointItemEdit(data: any): Observable<any> {
    console.log(data);
    return this.http.put(this.appHost + this.resourceStoryItem + data.id, data, httpOptions);
  }

  removeStoryPointItem(id: number): Observable<any> {
    return this.http.delete(this.appHost + this.resourceStoryItem + id, httpOptions);
  }

  save(data: any): Observable<any> {
    return this.http.post(this.appHost + this.resource, data, httpOptions);
  }

  saveEdit(data: any, id: number): Observable<any> {
    return this.http.put(this.appHost + this.resource + '/' + id, data, httpOptions);
  }
}
