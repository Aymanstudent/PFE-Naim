/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addMeter } from '../fn/meter-controller/add-meter';
import { AddMeter$Params } from '../fn/meter-controller/add-meter';
import { deleteMeterById } from '../fn/meter-controller/delete-meter-by-id';
import { DeleteMeterById$Params } from '../fn/meter-controller/delete-meter-by-id';
import { getMeters } from '../fn/meter-controller/get-meters';
import { GetMeters$Params } from '../fn/meter-controller/get-meters';
import { getMetersByCompany } from '../fn/meter-controller/get-meters-by-company';
import { GetMetersByCompany$Params } from '../fn/meter-controller/get-meters-by-company';
import { Meter } from '../models/meter';
import { updateMeter } from '../fn/meter-controller/update-meter';
import { UpdateMeter$Params } from '../fn/meter-controller/update-meter';

@Injectable({ providedIn: 'root' })
export class MeterControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateMeter()` */
  static readonly UpdateMeterPath = '/meter/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateMeter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateMeter$Response(params: UpdateMeter$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateMeter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateMeter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateMeter(params: UpdateMeter$Params, context?: HttpContext): Observable<string> {
    return this.updateMeter$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deleteMeterById()` */
  static readonly DeleteMeterByIdPath = '/meter/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteMeterById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  deleteMeterById$Response(params: DeleteMeterById$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteMeterById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteMeterById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  deleteMeterById(params: DeleteMeterById$Params, context?: HttpContext): Observable<string> {
    return this.deleteMeterById$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addMeter()` */
  static readonly AddMeterPath = '/meter/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addMeter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addMeter$Response(params: AddMeter$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addMeter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addMeter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addMeter(params: AddMeter$Params, context?: HttpContext): Observable<string> {
    return this.addMeter$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getMeters()` */
  static readonly GetMetersPath = '/meter/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMeters()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMeters$Response(params?: GetMeters$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Meter>>> {
    return getMeters(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMeters$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMeters(params?: GetMeters$Params, context?: HttpContext): Observable<Array<Meter>> {
    return this.getMeters$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Meter>>): Array<Meter> => r.body)
    );
  }

  /** Path part for operation `getMetersByCompany()` */
  static readonly GetMetersByCompanyPath = '/meter/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMetersByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMetersByCompany$Response(params: GetMetersByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Meter>>> {
    return getMetersByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMetersByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMetersByCompany(params: GetMetersByCompany$Params, context?: HttpContext): Observable<Array<Meter>> {
    return this.getMetersByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Meter>>): Array<Meter> => r.body)
    );
  }

}
