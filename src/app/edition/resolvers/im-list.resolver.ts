import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { InformationMap } from '../../classes/information-map';
import { InformationMapService } from '../../global/services/information-map.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ImListResolver implements Resolve<InformationMap[]> {

  constructor(private readonly informationMapService: InformationMapService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InformationMap[]> {
    return this.informationMapService.getIMOfVersion(1);
  }
}
