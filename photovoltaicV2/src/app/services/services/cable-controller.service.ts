/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCable } from '../fn/cable-controller/add-cable';
import { AddCable$Params } from '../fn/cable-controller/add-cable';
import { Cable } from '../models/cable';
import { deleteCable } from '../fn/cable-controller/delete-cable';
import { DeleteCable$Params } from '../fn/cable-controller/delete-cable';
import { getCables } from '../fn/cable-controller/get-cables';
import { GetCables$Params } from '../fn/cable-controller/get-cables';
import { getCablesByCompany } from '../fn/cable-controller/get-cables-by-company';
import { GetCablesByCompany$Params } from '../fn/cable-controller/get-cables-by-company';
import { updateCable } from '../fn/cable-controller/update-cable';
import { UpdateCable$Params } from '../fn/cable-controller/update-cable';

@Injectable({ providedIn: 'root' })
export class CableControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateCable()` */
  static readonly UpdateCablePath = '/cable/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCable()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCable$Response(params: UpdateCable$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateCable(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCable$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCable(params: UpdateCable$Params, context?: HttpContext): Observable<string> {
    return this.updateCable$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addCable()` */
  static readonly AddCablePath = '/cable/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCable()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCable$Response(params: AddCable$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addCable(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCable$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCable(params: AddCable$Params, context?: HttpContext): Observable<string> {
    return this.addCable$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getCables()` */
  static readonly GetCablesPath = '/cable/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCables()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCables$Response(params?: GetCables$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Cable>>> {
    return getCables(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCables$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCables(params?: GetCables$Params, context?: HttpContext): Observable<Array<Cable>> {
    return this.getCables$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Cable>>): Array<Cable> => r.body)
    );
  }

  /** Path part for operation `getCablesByCompany()` */
  static readonly GetCablesByCompanyPath = '/cable/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCablesByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCablesByCompany$Response(params: GetCablesByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Cable>>> {
    return getCablesByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCablesByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCablesByCompany(params: GetCablesByCompany$Params, context?: HttpContext): Observable<Array<Cable>> {
    return this.getCablesByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Cable>>): Array<Cable> => r.body)
    );
  }

  /** Path part for operation `deleteCable()` */
  static readonly DeleteCablePath = '/cable/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCable()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCable$Response(params: DeleteCable$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteCable(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCable$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCable(params: DeleteCable$Params, context?: HttpContext): Observable<string> {
    return this.deleteCable$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
