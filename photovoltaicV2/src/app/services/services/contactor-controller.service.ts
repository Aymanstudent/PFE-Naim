/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addContactor } from '../fn/contactor-controller/add-contactor';
import { AddContactor$Params } from '../fn/contactor-controller/add-contactor';
import { Contactor } from '../models/contactor';
import { deleteContactor } from '../fn/contactor-controller/delete-contactor';
import { DeleteContactor$Params } from '../fn/contactor-controller/delete-contactor';
import { getAllContactors } from '../fn/contactor-controller/get-all-contactors';
import { GetAllContactors$Params } from '../fn/contactor-controller/get-all-contactors';
import { getContactorByEmail } from '../fn/contactor-controller/get-contactor-by-email';
import { GetContactorByEmail$Params } from '../fn/contactor-controller/get-contactor-by-email';
import { updateContactor } from '../fn/contactor-controller/update-contactor';
import { UpdateContactor$Params } from '../fn/contactor-controller/update-contactor';

@Injectable({ providedIn: 'root' })
export class ContactorControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateContactor()` */
  static readonly UpdateContactorPath = '/contactor/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateContactor()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateContactor$Response(params: UpdateContactor$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateContactor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateContactor$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateContactor(params: UpdateContactor$Params, context?: HttpContext): Observable<string> {
    return this.updateContactor$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addContactor()` */
  static readonly AddContactorPath = '/contactor/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addContactor()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addContactor$Response(params: AddContactor$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addContactor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addContactor$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addContactor(params: AddContactor$Params, context?: HttpContext): Observable<string> {
    return this.addContactor$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getAllContactors()` */
  static readonly GetAllContactorsPath = '/contactor/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllContactors()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllContactors$Response(params?: GetAllContactors$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Contactor>>> {
    return getAllContactors(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllContactors$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllContactors(params?: GetAllContactors$Params, context?: HttpContext): Observable<Array<Contactor>> {
    return this.getAllContactors$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Contactor>>): Array<Contactor> => r.body)
    );
  }

  /** Path part for operation `getContactorByEmail()` */
  static readonly GetContactorByEmailPath = '/contactor/get/one/by-email';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContactorByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactorByEmail$Response(params: GetContactorByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<Contactor>> {
    return getContactorByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getContactorByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContactorByEmail(params: GetContactorByEmail$Params, context?: HttpContext): Observable<Contactor> {
    return this.getContactorByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<Contactor>): Contactor => r.body)
    );
  }

  /** Path part for operation `deleteContactor()` */
  static readonly DeleteContactorPath = '/contactor/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteContactor()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContactor$Response(params: DeleteContactor$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteContactor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteContactor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContactor(params: DeleteContactor$Params, context?: HttpContext): Observable<string> {
    return this.deleteContactor$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
