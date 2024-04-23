/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Meter } from '../../models/meter';

export interface GetMeters$Params {
}

export function getMeters(http: HttpClient, rootUrl: string, params?: GetMeters$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Meter>>> {
  const rb = new RequestBuilder(rootUrl, getMeters.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Meter>>;
    })
  );
}

getMeters.PATH = '/meter/get';
