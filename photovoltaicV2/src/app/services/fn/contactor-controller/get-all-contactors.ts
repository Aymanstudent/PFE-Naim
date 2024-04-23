/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Contactor } from '../../models/contactor';

export interface GetAllContactors$Params {
}

export function getAllContactors(http: HttpClient, rootUrl: string, params?: GetAllContactors$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Contactor>>> {
  const rb = new RequestBuilder(rootUrl, getAllContactors.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Contactor>>;
    })
  );
}

getAllContactors.PATH = '/contactor/get';
