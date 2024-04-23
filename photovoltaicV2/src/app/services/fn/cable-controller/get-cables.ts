/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Cable } from '../../models/cable';

export interface GetCables$Params {
}

export function getCables(http: HttpClient, rootUrl: string, params?: GetCables$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Cable>>> {
  const rb = new RequestBuilder(rootUrl, getCables.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Cable>>;
    })
  );
}

getCables.PATH = '/cable/get';
