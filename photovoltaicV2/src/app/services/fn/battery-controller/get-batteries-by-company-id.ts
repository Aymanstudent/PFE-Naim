/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Battery } from '../../models/battery';

export interface GetBatteriesByCompanyId$Params {
  id: number;
}

export function getBatteriesByCompanyId(http: HttpClient, rootUrl: string, params: GetBatteriesByCompanyId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Battery>>> {
  const rb = new RequestBuilder(rootUrl, getBatteriesByCompanyId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Battery>>;
    })
  );
}

getBatteriesByCompanyId.PATH = '/battery/get/company/{id}';
