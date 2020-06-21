import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appHost: string;
  private resourceLogin = 'api/Token';
  constructor(private http: HttpClient) {
    this.appHost = environment.host;
  }

  login(data: any): Observable<any> {
    return this.http.post(this.appHost + this.resourceLogin, data);
  }
}
