import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(body: any): Observable<any> {
    return this.http.post(environment.server + 'auth', body);
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(environment.server + 'auth');
  }
}
