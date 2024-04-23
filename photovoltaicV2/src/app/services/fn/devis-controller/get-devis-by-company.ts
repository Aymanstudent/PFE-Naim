/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Devis } from '../../models/devis';

export interface GetDevisByCompany$Params {
  id: number;
}

export function getDevisByCompany(http: HttpClient, rootUrl: string, params: GetDevisByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Devis>>> {
  const rb = new RequestBuilder(rootUrl, getDevisByCompany.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Devis>>;
    })
  );
}

getDevisByCompany.PATH = '/devis/get/company/{id}';
