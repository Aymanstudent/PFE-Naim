/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Supplier } from '../../models/supplier';

export interface GetSuppliersCompany$Params {
  id: number;
}

export function getSuppliersCompany(http: HttpClient, rootUrl: string, params: GetSuppliersCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Supplier>>> {
  const rb = new RequestBuilder(rootUrl, getSuppliersCompany.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Supplier>>;
    })
  );
}

getSuppliersCompany.PATH = '/supplier/get/company/{id}';
