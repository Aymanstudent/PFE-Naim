/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Worker } from '../../models/worker';

export interface GetWorkers$Params {
}

export function getWorkers(http: HttpClient, rootUrl: string, params?: GetWorkers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Worker>>> {
  const rb = new RequestBuilder(rootUrl, getWorkers.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Worker>>;
    })
  );
}

getWorkers.PATH = '/worker/get';
