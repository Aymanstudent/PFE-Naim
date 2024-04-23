/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SystemFixing } from '../../models/system-fixing';

export interface GetSystemFixings$Params {
}

export function getSystemFixings(http: HttpClient, rootUrl: string, params?: GetSystemFixings$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SystemFixing>>> {
  const rb = new RequestBuilder(rootUrl, getSystemFixings.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SystemFixing>>;
    })
  );
}

getSystemFixings.PATH = '/systemFixing/get';
