/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addBill } from '../fn/bill-controller/add-bill';
import { AddBill$Params } from '../fn/bill-controller/add-bill';
import { Bill } from '../models/bill';
import { getBillByConstructionId } from '../fn/bill-controller/get-bill-by-construction-id';
import { GetBillByConstructionId$Params } from '../fn/bill-controller/get-bill-by-construction-id';
import { getBills } from '../fn/bill-controller/get-bills';
import { GetBills$Params } from '../fn/bill-controller/get-bills';

@Injectable({ providedIn: 'root' })
export class BillControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addBill()` */
  static readonly AddBillPath = '/bill/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addBill()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addBill$Response(params: AddBill$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addBill(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addBill$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addBill(params: AddBill$Params, context?: HttpContext): Observable<string> {
    return this.addBill$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getBills()` */
  static readonly GetBillsPath = '/bill/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBills()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBills$Response(params?: GetBills$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Bill>>> {
    return getBills(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBills$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBills(params?: GetBills$Params, context?: HttpContext): Observable<Array<Bill>> {
    return this.getBills$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Bill>>): Array<Bill> => r.body)
    );
  }

  /** Path part for operation `getBillByConstructionId()` */
  static readonly GetBillByConstructionIdPath = '/bill/get/construction/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBillByConstructionId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBillByConstructionId$Response(params: GetBillByConstructionId$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return getBillByConstructionId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBillByConstructionId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBillByConstructionId(params: GetBillByConstructionId$Params, context?: HttpContext): Observable<Bill> {
    return this.getBillByConstructionId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

}
