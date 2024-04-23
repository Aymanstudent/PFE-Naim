/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addContactorRequest } from '../fn/contactor-request-controller/add-contactor-request';
import { AddContactorRequest$Params } from '../fn/contactor-request-controller/add-contactor-request';
import { ContactorRequest } from '../models/contactor-request';
import { deleteContactorRequest } from '../fn/contactor-request-controller/delete-contactor-request';
import { DeleteContactorRequest$Params } from '../fn/contactor-request-controller/delete-contactor-request';
import { getContactorRequests } from '../fn/contactor-request-controller/get-contactor-requests';
import { GetContactorRequests$Params } from '../fn/contactor-request-controller/get-contactor-requests';

@Injectable({ providedIn: 'root' })
export class ContactorRequestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addContactorRequest()` */
  static readonly AddContactorRequestPath = '/contactorRequest/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addContactorRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addContactorRequest$Response(params: AddContactorRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactorRequest>> {
    return addContactorRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addContactorRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addContactorRequest(params: AddContactorRequest$Params, context?: HttpContext): Observable<ContactorRequest> {
    return this.addContactorRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactorRequest>): ContactorRequest => r.body)
    );
  }

  /** Path part for operation `getContactorRequests()` */
  static readonly GetContactorRequestsPath = '/contactorRequest/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContactorRequests()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactorRequests$Response(params?: GetContactorRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactorRequest>>> {
    return getContactorRequests(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getContactorRequests$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactorRequests(params?: GetContactorRequests$Params, context?: HttpContext): Observable<Array<ContactorRequest>> {
    return this.getContactorRequests$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ContactorRequest>>): Array<ContactorRequest> => r.body)
    );
  }

  /** Path part for operation `deleteContactorRequest()` */
  static readonly DeleteContactorRequestPath = '/contactorRequest/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteContactorRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContactorRequest$Response(params: {
    id: number | undefined
  }, context?: HttpContext | undefined): Observable<StrictHttpResponse<string>> {
    return deleteContactorRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteContactorRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContactorRequest(params: { id: number | undefined }, context?: HttpContext): Observable<string> {
    return this.deleteContactorRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
