/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Construction } from '../models/construction';
import { deleteConstruction } from '../fn/construction-controller/delete-construction';
import { DeleteConstruction$Params } from '../fn/construction-controller/delete-construction';
import { getConstructionByCompany } from '../fn/construction-controller/get-construction-by-company';
import { GetConstructionByCompany$Params } from '../fn/construction-controller/get-construction-by-company';
import { getConstructions } from '../fn/construction-controller/get-constructions';
import { GetConstructions$Params } from '../fn/construction-controller/get-constructions';
import { saveConstruction } from '../fn/construction-controller/save-construction';
import { SaveConstruction$Params } from '../fn/construction-controller/save-construction';
import { updateConstruction } from '../fn/construction-controller/update-construction';
import { UpdateConstruction$Params } from '../fn/construction-controller/update-construction';

@Injectable({ providedIn: 'root' })
export class ConstructionControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateConstruction()` */
  static readonly UpdateConstructionPath = '/constructor/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateConstruction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateConstruction$Response(params: UpdateConstruction$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateConstruction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateConstruction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateConstruction(params: UpdateConstruction$Params, context?: HttpContext): Observable<string> {
    return this.updateConstruction$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `saveConstruction()` */
  static readonly SaveConstructionPath = '/constructor/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveConstruction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveConstruction$Response(params: SaveConstruction$Params, context?: HttpContext): Observable<StrictHttpResponse<Construction>> {
    return saveConstruction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveConstruction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveConstruction(params: SaveConstruction$Params, context?: HttpContext): Observable<Construction> {
    return this.saveConstruction$Response(params, context).pipe(
      map((r: StrictHttpResponse<Construction>): Construction => r.body)
    );
  }

  /** Path part for operation `getConstructions()` */
  static readonly GetConstructionsPath = '/constructor/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getConstructions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConstructions$Response(params?: GetConstructions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Construction>>> {
    return getConstructions(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getConstructions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConstructions(params?: GetConstructions$Params, context?: HttpContext): Observable<Array<Construction>> {
    return this.getConstructions$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Construction>>): Array<Construction> => r.body)
    );
  }

  /** Path part for operation `getConstructionByCompany()` */
  static readonly GetConstructionByCompanyPath = '/constructor/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getConstructionByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConstructionByCompany$Response(params: GetConstructionByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Construction>>> {
    return getConstructionByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getConstructionByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConstructionByCompany(params: GetConstructionByCompany$Params, context?: HttpContext): Observable<Array<Construction>> {
    return this.getConstructionByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Construction>>): Array<Construction> => r.body)
    );
  }

  /** Path part for operation `deleteConstruction()` */
  static readonly DeleteConstructionPath = '/constructor/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteConstruction()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteConstruction$Response(params: DeleteConstruction$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteConstruction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteConstruction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteConstruction(params: DeleteConstruction$Params, context?: HttpContext): Observable<string> {
    return this.deleteConstruction$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
