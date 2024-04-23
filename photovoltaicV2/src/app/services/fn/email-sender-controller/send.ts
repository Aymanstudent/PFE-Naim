/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface Send$Params {
  attachment?: Array<Blob>;
  to: string;
  body: string;
  subject: string;
}

export function send(http: HttpClient, rootUrl: string, params: Send$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, send.PATH, 'post');
  if (params) {
    rb.query('attachment', params.attachment, {});
    rb.query('to', params.to, {});
    rb.query('body', params.body, {});
    rb.query('subject', params.subject, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

send.PATH = '/mail/send';
