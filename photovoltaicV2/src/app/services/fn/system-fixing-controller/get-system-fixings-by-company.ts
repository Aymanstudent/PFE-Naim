/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SystemFixing } from '../../models/system-fixing';

export interface GetSystemFixingsByCompany$Params {
  id: number;
}

export function getSystemFixingsByCompany(http: HttpClient, rootUrl: string, params: GetSystemFixingsByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SystemFixing>>> {
  const rb = new RequestBuilder(rootUrl, getSystemFixingsByCompany.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SystemFixing>>;
    })
  );
}

getSystemFixingsByCompany.PATH = '/systemFixing/get/company/{id}';
