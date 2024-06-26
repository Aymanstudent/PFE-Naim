/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteContactorRequest$Params {
  id: number;
}

export function deleteContactorRequest(http: HttpClient, rootUrl: string, params: {
  id: number | undefined
}, context?: HttpContext | undefined): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, deleteContactorRequest.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

deleteContactorRequest.PATH = '/contactorRequest/delete/{id}';
