/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DevisRequest } from '../../models/devis-request';

export interface GetDevisRequestById$Params {
  id: number;
}

export function getDevisRequestById(http: HttpClient, rootUrl: string, params: GetDevisRequestById$Params, context?: HttpContext): Observable<StrictHttpResponse<DevisRequest>> {
  const rb = new RequestBuilder(rootUrl, getDevisRequestById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DevisRequest>;
    })
  );
}

getDevisRequestById.PATH = '/devisRequest/get/{id}';
