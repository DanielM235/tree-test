import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';
import { MyHttpClient } from '../global/my-http-client.service';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class AuthService {

  constructor(private readonly httpClient: MyHttpClient) {
  }

  login(username: string, password: string, forceLogin = true): Observable<Account> {
    let formData = `j_username=${encodeURIComponent(username)}&j_password=${encodeURIComponent(password)}&submit=Login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    if (forceLogin) {
      formData += `&forceLogin=${forceLogin}`;
    }
    return this.httpClient.post('api/authentication', formData, undefined, headers).pipe(
      switchMap(() => this.httpClient.get('api/account'))
    );
  }
  logout(): Observable<void> {
    return this.httpClient.post('api/logout');
  }

}
