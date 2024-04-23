/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { send } from '../fn/email-sender-controller/send';
import { Send$Params } from '../fn/email-sender-controller/send';

@Injectable({ providedIn: 'root' })
export class EmailSenderControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `send()` */
  static readonly SendPath = '/mail/send';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `send()` instead.
   *
   * This method doesn't expect any request body.
   */
  send$Response(params: Send$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return send(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `send$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  send(params: Send$Params, context?: HttpContext): Observable<string> {
    return this.send$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
