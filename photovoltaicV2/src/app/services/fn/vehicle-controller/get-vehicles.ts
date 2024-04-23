/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Vehicule } from '../../models/vehicule';

export interface GetVehicles$Params {
}

export function getVehicles(http: HttpClient, rootUrl: string, params?: GetVehicles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Vehicule>>> {
  const rb = new RequestBuilder(rootUrl, getVehicles.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Vehicule>>;
    })
  );
}

getVehicles.PATH = '/vehicle/get';
