import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serverUri = environment.server + 'auth';

  constructor(private http: HttpClient) { }

  signIn(body: any): Observable<any> {
    return this.http.post(this.serverUri, body);
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(this.serverUri);
  }

  logout(): Observable<void> {
    return this.http.get<void>(this.serverUri + '/logout');
  }
}
