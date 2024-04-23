/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Construction } from '../../models/construction';

export interface GetConstructionByCompany$Params {
  id: number;
}

export function getConstructionByCompany(http: HttpClient, rootUrl: string, params: GetConstructionByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Construction>>> {
  const rb = new RequestBuilder(rootUrl, getConstructionByCompany.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Construction>>;
    })
  );
}

getConstructionByCompany.PATH = '/constructor/get/company/{id}';
