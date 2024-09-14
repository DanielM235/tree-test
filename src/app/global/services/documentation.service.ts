import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documentation } from '../../classes/documentation';
import { MyHttpClient } from '../my-http-client.service';

@Injectable({ providedIn: 'root'})
export class DocumentationService {
  constructor(private readonly httpClient: MyHttpClient) {
  }

  getDocumentation(id: number, fullView: boolean): Observable<Documentation> {
    const params: HttpParams = new HttpParams().set('fullView', String(fullView));
    const productId = 1;
    const versionId = 1;
    return this.httpClient.get(`api/products/${productId}/versions/${versionId}/documentations/${id}`, params);
  }
}
