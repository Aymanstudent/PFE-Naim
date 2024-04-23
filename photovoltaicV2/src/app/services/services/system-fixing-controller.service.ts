/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ajouterSystemeFixation } from '../fn/system-fixing-controller/ajouter-systeme-fixation';
import { AjouterSystemeFixation$Params } from '../fn/system-fixing-controller/ajouter-systeme-fixation';
import { deleteSystemFixing } from '../fn/system-fixing-controller/delete-system-fixing';
import { DeleteSystemFixing$Params } from '../fn/system-fixing-controller/delete-system-fixing';
import { getSystemFixings } from '../fn/system-fixing-controller/get-system-fixings';
import { GetSystemFixings$Params } from '../fn/system-fixing-controller/get-system-fixings';
import { getSystemFixingsByCompany } from '../fn/system-fixing-controller/get-system-fixings-by-company';
import { GetSystemFixingsByCompany$Params } from '../fn/system-fixing-controller/get-system-fixings-by-company';
import { SystemFixing } from '../models/system-fixing';
import { updateSystemFixing } from '../fn/system-fixing-controller/update-system-fixing';
import { UpdateSystemFixing$Params } from '../fn/system-fixing-controller/update-system-fixing';

@Injectable({ providedIn: 'root' })
export class SystemFixingControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateSystemFixing()` */
  static readonly UpdateSystemFixingPath = '/systemFixing/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSystemFixing()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSystemFixing$Response(params: UpdateSystemFixing$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateSystemFixing(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSystemFixing$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSystemFixing(params: UpdateSystemFixing$Params, context?: HttpContext): Observable<string> {
    return this.updateSystemFixing$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterSystemeFixation()` */
  static readonly AjouterSystemeFixationPath = '/systemFixing/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterSystemeFixation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterSystemeFixation$Response(params: AjouterSystemeFixation$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterSystemeFixation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterSystemeFixation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterSystemeFixation(params: AjouterSystemeFixation$Params, context?: HttpContext): Observable<string> {
    return this.ajouterSystemeFixation$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getSystemFixings()` */
  static readonly GetSystemFixingsPath = '/systemFixing/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSystemFixings()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSystemFixings$Response(params?: GetSystemFixings$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SystemFixing>>> {
    return getSystemFixings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSystemFixings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSystemFixings(params?: GetSystemFixings$Params, context?: HttpContext): Observable<Array<SystemFixing>> {
    return this.getSystemFixings$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SystemFixing>>): Array<SystemFixing> => r.body)
    );
  }

  /** Path part for operation `getSystemFixingsByCompany()` */
  static readonly GetSystemFixingsByCompanyPath = '/systemFixing/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSystemFixingsByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSystemFixingsByCompany$Response(params: GetSystemFixingsByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SystemFixing>>> {
    return getSystemFixingsByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSystemFixingsByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSystemFixingsByCompany(params: GetSystemFixingsByCompany$Params, context?: HttpContext): Observable<Array<SystemFixing>> {
    return this.getSystemFixingsByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SystemFixing>>): Array<SystemFixing> => r.body)
    );
  }

  /** Path part for operation `deleteSystemFixing()` */
  static readonly DeleteSystemFixingPath = '/systemFixing/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSystemFixing()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSystemFixing$Response(params: DeleteSystemFixing$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteSystemFixing(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSystemFixing$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSystemFixing(params: DeleteSystemFixing$Params, context?: HttpContext): Observable<string> {
    return this.deleteSystemFixing$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
