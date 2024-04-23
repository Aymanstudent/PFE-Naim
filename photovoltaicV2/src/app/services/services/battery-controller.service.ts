/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addBattery } from '../fn/battery-controller/add-battery';
import { AddBattery$Params } from '../fn/battery-controller/add-battery';
import { Battery } from '../models/battery';
import { deleteBattery } from '../fn/battery-controller/delete-battery';
import { DeleteBattery$Params } from '../fn/battery-controller/delete-battery';
import { getBatteries } from '../fn/battery-controller/get-batteries';
import { GetBatteries$Params } from '../fn/battery-controller/get-batteries';
import { getBatteriesByCompanyId } from '../fn/battery-controller/get-batteries-by-company-id';
import { GetBatteriesByCompanyId$Params } from '../fn/battery-controller/get-batteries-by-company-id';
import { updateBattery } from '../fn/battery-controller/update-battery';
import { UpdateBattery$Params } from '../fn/battery-controller/update-battery';

@Injectable({ providedIn: 'root' })
export class BatteryControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateBattery()` */
  static readonly UpdateBatteryPath = '/battery/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBattery()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBattery$Response(params: UpdateBattery$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateBattery(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateBattery$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBattery(params: UpdateBattery$Params, context?: HttpContext): Observable<string> {
    return this.updateBattery$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addBattery()` */
  static readonly AddBatteryPath = '/battery/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addBattery()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addBattery$Response(params: AddBattery$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addBattery(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addBattery$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addBattery(params: AddBattery$Params, context?: HttpContext): Observable<string> {
    return this.addBattery$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getBatteries()` */
  static readonly GetBatteriesPath = '/battery/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBatteries()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBatteries$Response(params?: GetBatteries$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Battery>>> {
    return getBatteries(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBatteries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBatteries(params?: GetBatteries$Params, context?: HttpContext): Observable<Array<Battery>> {
    return this.getBatteries$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Battery>>): Array<Battery> => r.body)
    );
  }

  /** Path part for operation `getBatteriesByCompanyId()` */
  static readonly GetBatteriesByCompanyIdPath = '/battery/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBatteriesByCompanyId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBatteriesByCompanyId$Response(params: GetBatteriesByCompanyId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Battery>>> {
    return getBatteriesByCompanyId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBatteriesByCompanyId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBatteriesByCompanyId(params: GetBatteriesByCompanyId$Params, context?: HttpContext): Observable<Array<Battery>> {
    return this.getBatteriesByCompanyId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Battery>>): Array<Battery> => r.body)
    );
  }

  /** Path part for operation `deleteBattery()` */
  static readonly DeleteBatteryPath = '/battery/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBattery()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBattery$Response(params: DeleteBattery$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteBattery(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBattery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBattery(params: DeleteBattery$Params, context?: HttpContext): Observable<string> {
    return this.deleteBattery$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
