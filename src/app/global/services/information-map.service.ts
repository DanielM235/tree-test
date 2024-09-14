import { Injectable } from '@angular/core';
import { MyHttpClient } from '../my-http-client.service';
import { Observable } from 'rxjs';
import { InformationMap } from '../../classes/information-map';

@Injectable({ providedIn: 'root' })
export class InformationMapService {

  private url = 'api/versions';

  constructor(private readonly http: MyHttpClient) {
  }

  getIMOfVersion(versionId: number): Observable<InformationMap[]> {
    return this.http.get(`${ this.url }/${ versionId }/informationMaps`)
  }
}
