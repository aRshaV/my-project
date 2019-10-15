import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: string;
  pass: string;

  constructor(private http: HttpClient) {}

  checkLogin(user: string, pass: string): Observable<boolean> {
    this.user = user;
    this.pass = pass;

    return this.http.get<boolean>(environment.server + `/auth/${user}/${pass}`);
  }
}
