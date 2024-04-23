/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addAmendment } from '../fn/amendment-controller/add-amendment';
import { AddAmendment$Params } from '../fn/amendment-controller/add-amendment';
import { Amendment } from '../models/amendment';
import { getAmendmentsByConstructionId } from '../fn/amendment-controller/get-amendments-by-construction-id';
import { GetAmendmentsByConstructionId$Params } from '../fn/amendment-controller/get-amendments-by-construction-id';

@Injectable({ providedIn: 'root' })
export class AmendmentControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addAmendment()` */
  static readonly AddAmendmentPath = '/amendment/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAmendment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAmendment$Response(params: AddAmendment$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addAmendment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addAmendment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAmendment(params: AddAmendment$Params, context?: HttpContext): Observable<string> {
    return this.addAmendment$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getAmendmentsByConstructionId()` */
  static readonly GetAmendmentsByConstructionIdPath = '/amendment/get/construction/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAmendmentsByConstructionId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAmendmentsByConstructionId$Response(params: GetAmendmentsByConstructionId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Amendment>>> {
    return getAmendmentsByConstructionId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAmendmentsByConstructionId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAmendmentsByConstructionId(params: GetAmendmentsByConstructionId$Params, context?: HttpContext): Observable<Array<Amendment>> {
    return this.getAmendmentsByConstructionId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Amendment>>): Array<Amendment> => r.body)
    );
  }

}
