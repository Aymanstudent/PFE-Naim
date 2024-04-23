/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactorRequest } from '../../models/contactor-request';

export interface AddContactorRequest$Params {
      body: ContactorRequest
}

export function addContactorRequest(http: HttpClient, rootUrl: string, params: AddContactorRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactorRequest>> {
  const rb = new RequestBuilder(rootUrl, addContactorRequest.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContactorRequest>;
    })
  );
}

addContactorRequest.PATH = '/contactorRequest/add';
