/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Spot } from '../../models/spot';

export interface GetSpots$Params {
}

export function getSpots(http: HttpClient, rootUrl: string, params?: GetSpots$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Spot>>> {
  const rb = new RequestBuilder(rootUrl, getSpots.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Spot>>;
    })
  );
}

getSpots.PATH = '/spot/get';
