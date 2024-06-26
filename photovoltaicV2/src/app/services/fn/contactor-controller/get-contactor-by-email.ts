/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Contactor } from '../../models/contactor';

export interface GetContactorByEmail$Params {
  email: string;
}

export function getContactorByEmail(http: HttpClient, rootUrl: string, params: GetContactorByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<Contactor>> {
  const rb = new RequestBuilder(rootUrl, getContactorByEmail.PATH, 'get');
  if (params) {
    rb.query('email', params.email, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Contactor>;
    })
  );
}

getContactorByEmail.PATH = '/contactor/get/one/by-email/';
