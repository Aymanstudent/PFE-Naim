/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addDevisRequest } from '../fn/devis-request-controller/add-devis-request';
import { AddDevisRequest$Params } from '../fn/devis-request-controller/add-devis-request';
import { deleteDevisRequestById } from '../fn/devis-request-controller/delete-devis-request-by-id';
import { DeleteDevisRequestById$Params } from '../fn/devis-request-controller/delete-devis-request-by-id';
import { deleteDevisRequests } from '../fn/devis-request-controller/delete-devis-requests';
import { DeleteDevisRequests$Params } from '../fn/devis-request-controller/delete-devis-requests';
import { DevisRequest } from '../models/devis-request';
import { getDevisRequestById } from '../fn/devis-request-controller/get-devis-request-by-id';
import { GetDevisRequestById$Params } from '../fn/devis-request-controller/get-devis-request-by-id';
import { getDevisRequests } from '../fn/devis-request-controller/get-devis-requests';
import { GetDevisRequests$Params } from '../fn/devis-request-controller/get-devis-requests';
import { getDevisRequestsByCompany } from '../fn/devis-request-controller/get-devis-requests-by-company';
import { GetDevisRequestsByCompany$Params } from '../fn/devis-request-controller/get-devis-requests-by-company';
import { updateDevisRequest } from '../fn/devis-request-controller/update-devis-request';
import { UpdateDevisRequest$Params } from '../fn/devis-request-controller/update-devis-request';

@Injectable({ providedIn: 'root' })
export class DevisRequestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateDevisRequest()` */
  static readonly UpdateDevisRequestPath = '/devisRequest/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDevisRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDevisRequest$Response(params: UpdateDevisRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateDevisRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateDevisRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDevisRequest(params: UpdateDevisRequest$Params, context?: HttpContext): Observable<string> {
    return this.updateDevisRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addDevisRequest()` */
  static readonly AddDevisRequestPath = '/devisRequest/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addDevisRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addDevisRequest$Response(params: AddDevisRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addDevisRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addDevisRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addDevisRequest(params: AddDevisRequest$Params, context?: HttpContext): Observable<string> {
    return this.addDevisRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getDevisRequests()` */
  static readonly GetDevisRequestsPath = '/devisRequest/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDevisRequests()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevisRequests$Response(params?: GetDevisRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DevisRequest>>> {
    return getDevisRequests(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDevisRequests$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevisRequests(params?: GetDevisRequests$Params, context?: HttpContext): Observable<Array<DevisRequest>> {
    return this.getDevisRequests$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DevisRequest>>): Array<DevisRequest> => r.body)
    );
  }

  /** Path part for operation `getDevisRequestById()` */
  static readonly GetDevisRequestByIdPath = '/devisRequest/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDevisRequestById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevisRequestById$Response(params: GetDevisRequestById$Params, context?: HttpContext): Observable<StrictHttpResponse<DevisRequest>> {
    return getDevisRequestById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDevisRequestById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevisRequestById(params: GetDevisRequestById$Params, context?: HttpContext): Observable<DevisRequest> {
    return this.getDevisRequestById$Response(params, context).pipe(
      map((r: StrictHttpResponse<DevisRequest>): DevisRequest => r.body)
    );
  }

  /** Path part for operation `getDevisRequestsByCompany()` */
  static readonly GetDevisRequestsByCompanyPath = '/devisRequest/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDevisRequestsByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevisRequestsByCompany$Response(params: GetDevisRequestsByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DevisRequest>>> {
    return getDevisRequestsByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDevisRequestsByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevisRequestsByCompany(params: GetDevisRequestsByCompany$Params, context?: HttpContext): Observable<Array<DevisRequest>> {
    return this.getDevisRequestsByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DevisRequest>>): Array<DevisRequest> => r.body)
    );
  }

  /** Path part for operation `deleteDevisRequests()` */
  static readonly DeleteDevisRequestsPath = '/devisRequest/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDevisRequests()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDevisRequests$Response(params?: DeleteDevisRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteDevisRequests(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDevisRequests$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDevisRequests(params?: DeleteDevisRequests$Params, context?: HttpContext): Observable<string> {
    return this.deleteDevisRequests$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deleteDevisRequestById()` */
  static readonly DeleteDevisRequestByIdPath = '/devisRequest/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDevisRequestById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDevisRequestById$Response(params: {
    id: number | undefined
  }, context?: HttpContext | undefined): Observable<StrictHttpResponse<string>> {
    return deleteDevisRequestById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDevisRequestById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDevisRequestById(params: { id: number | undefined }, context?: HttpContext): Observable<string> {
    return this.deleteDevisRequestById$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
