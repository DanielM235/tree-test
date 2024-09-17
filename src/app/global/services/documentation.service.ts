import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { Documentation } from '../../classes/documentation';
import { MyHttpClient } from '../my-http-client.service';

@Injectable({ providedIn: 'root'})
export class DocumentationService {
  private depth = 1;
  constructor(private readonly httpClient: MyHttpClient) {
  }

  getDocumentation(id: number, fullView: boolean): Observable<Documentation> {
    const params: HttpParams = new HttpParams().set('fullView', String(fullView));
    const productId = 2;
    const versionId = 2;
    return this.httpClient.get(`api/products/${productId}/versions/${versionId}/documentations/${id}`, params);
  }

  getTree(imId: number | undefined, subRootId?: number, depth = this.depth, trashed = false): Observable<Documentation> {
    if (imId) {
      const productId = 2;
      const versionId = 2;
          const treeUrl = `api/products/${productId}/versions/${versionId}/tree/informationMap/${imId}`;
          let params = new HttpParams().set('depth', String(depth)).set('trashed', String(trashed));
          if (subRootId) {
            params = params.set('subRootId', String(subRootId));
          }
          return this.httpClient.get(treeUrl, params);
    } else {
      return EMPTY;
    }
  }
}
