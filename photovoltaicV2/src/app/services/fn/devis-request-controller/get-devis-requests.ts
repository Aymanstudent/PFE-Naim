/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DevisRequest } from '../../models/devis-request';

export interface GetDevisRequests$Params {
}

export function getDevisRequests(http: HttpClient, rootUrl: string, params?: GetDevisRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DevisRequest>>> {
  const rb = new RequestBuilder(rootUrl, getDevisRequests.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DevisRequest>>;
    })
  );
}

getDevisRequests.PATH = '/devisRequest/get';
