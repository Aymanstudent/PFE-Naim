/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Worker } from '../../models/worker';

export interface GetWorkersByCompany$Params {
  id: number;
}

export function getWorkersByCompany(http: HttpClient, rootUrl: string, params: GetWorkersByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Worker>>> {
  const rb = new RequestBuilder(rootUrl, getWorkersByCompany.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Worker>>;
    })
  );
}

getWorkersByCompany.PATH = '/worker/get/company/{id}';
