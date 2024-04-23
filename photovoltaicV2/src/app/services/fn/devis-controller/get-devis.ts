/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Devis } from '../../models/devis';

export interface GetDevis$Params {
}

export function getDevis(http: HttpClient, rootUrl: string, params?: GetDevis$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Devis>>> {
  const rb = new RequestBuilder(rootUrl, getDevis.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Devis>>;
    })
  );
}

getDevis.PATH = '/devis/get';
