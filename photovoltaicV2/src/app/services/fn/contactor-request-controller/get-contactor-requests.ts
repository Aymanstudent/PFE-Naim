/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactorRequest } from '../../models/contactor-request';

export interface GetContactorRequests$Params {
}

export function getContactorRequests(http: HttpClient, rootUrl: string, params?: GetContactorRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactorRequest>>> {
  const rb = new RequestBuilder(rootUrl, getContactorRequests.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ContactorRequest>>;
    })
  );
}

getContactorRequests.PATH = '/contactorRequest/get';
