import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyHttpClient {

  constructor(private readonly http: HttpClient) {
  }

  get(url: string, params?: HttpParams): Observable<any> {
    const httpOptions = this.buildRequestOptions(params);
    return this.http.get<any>(url, httpOptions).pipe(catchError(this.handleError));
  }
  post(url: string, body: any = null, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    const httpOptions = this.buildRequestOptions(params, headers);

    return this.http.post<any>(url, body, httpOptions).pipe(catchError(this.handleError));
  }

  put(url: string, body: any = null, params?: HttpParams): Observable<any> {
    const httpOptions = this.buildRequestOptions(params);

    return this.http.put(url, body, httpOptions).pipe(catchError(this.handleError));
  }

  commonDelete(url: string, params?: HttpParams): Observable<any> {
    const httpOptions = this.buildRequestOptions(params);

    return this.http.delete(url, httpOptions).pipe(catchError(this.handleError));
  }

  buildRequestOptions(params?: HttpParams, headers?: HttpHeaders, withCredentials = true) {
    return {
      headers: headers || new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      /* eslint-disable @typescript-eslint/prefer-as-const */
      responseType: 'json' as 'json',
      withCredentials: withCredentials,
      params: params
    };
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(err);
  }
}
