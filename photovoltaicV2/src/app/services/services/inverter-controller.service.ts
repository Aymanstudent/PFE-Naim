/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addInverter } from '../fn/inverter-controller/add-inverter';
import { AddInverter$Params } from '../fn/inverter-controller/add-inverter';
import { deleteInverterById } from '../fn/inverter-controller/delete-inverter-by-id';
import { DeleteInverterById$Params } from '../fn/inverter-controller/delete-inverter-by-id';
import { getInverters } from '../fn/inverter-controller/get-inverters';
import { GetInverters$Params } from '../fn/inverter-controller/get-inverters';
import { getInvertersByCompany } from '../fn/inverter-controller/get-inverters-by-company';
import { GetInvertersByCompany$Params } from '../fn/inverter-controller/get-inverters-by-company';
import { Inverter } from '../models/inverter';
import { updateInverter } from '../fn/inverter-controller/update-inverter';
import { UpdateInverter$Params } from '../fn/inverter-controller/update-inverter';

@Injectable({ providedIn: 'root' })
export class InverterControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateInverter()` */
  static readonly UpdateInverterPath = '/inverter/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateInverter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateInverter$Response(params: UpdateInverter$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateInverter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateInverter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateInverter(params: UpdateInverter$Params, context?: HttpContext): Observable<string> {
    return this.updateInverter$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addInverter()` */
  static readonly AddInverterPath = '/inverter/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addInverter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addInverter$Response(params: AddInverter$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addInverter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addInverter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addInverter(params: AddInverter$Params, context?: HttpContext): Observable<string> {
    return this.addInverter$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getInverters()` */
  static readonly GetInvertersPath = '/inverter/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInverters()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInverters$Response(params?: GetInverters$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Inverter>>> {
    return getInverters(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInverters$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInverters(params?: GetInverters$Params, context?: HttpContext): Observable<Array<Inverter>> {
    return this.getInverters$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Inverter>>): Array<Inverter> => r.body)
    );
  }

  /** Path part for operation `getInvertersByCompany()` */
  static readonly GetInvertersByCompanyPath = '/inverter/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInvertersByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvertersByCompany$Response(params: GetInvertersByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Inverter>>> {
    return getInvertersByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInvertersByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvertersByCompany(params: GetInvertersByCompany$Params, context?: HttpContext): Observable<Array<Inverter>> {
    return this.getInvertersByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Inverter>>): Array<Inverter> => r.body)
    );
  }

  /** Path part for operation `deleteInverterById()` */
  static readonly DeleteInverterByIdPath = '/inverter/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteInverterById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInverterById$Response(params: DeleteInverterById$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteInverterById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteInverterById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInverterById(params: DeleteInverterById$Params, context?: HttpContext): Observable<string> {
    return this.deleteInverterById$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
