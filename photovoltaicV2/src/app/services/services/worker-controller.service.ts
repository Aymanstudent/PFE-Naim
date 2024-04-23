/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addWorker } from '../fn/worker-controller/add-worker';
import { AddWorker$Params } from '../fn/worker-controller/add-worker';
import { deleteWorker } from '../fn/worker-controller/delete-worker';
import { DeleteWorker$Params } from '../fn/worker-controller/delete-worker';
import { getWorkerByEmail } from '../fn/worker-controller/get-worker-by-email';
import { GetWorkerByEmail$Params } from '../fn/worker-controller/get-worker-by-email';
import { getWorkers } from '../fn/worker-controller/get-workers';
import { GetWorkers$Params } from '../fn/worker-controller/get-workers';
import { getWorkersByCompany } from '../fn/worker-controller/get-workers-by-company';
import { GetWorkersByCompany$Params } from '../fn/worker-controller/get-workers-by-company';
import { updateWorker } from '../fn/worker-controller/update-worker';
import { UpdateWorker$Params } from '../fn/worker-controller/update-worker';
import { Worker } from '../models/worker';

@Injectable({ providedIn: 'root' })
export class WorkerControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateWorker()` */
  static readonly UpdateWorkerPath = '/worker/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateWorker()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateWorker$Response(params: UpdateWorker$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateWorker(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateWorker$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateWorker(params: UpdateWorker$Params, context?: HttpContext): Observable<string> {
    return this.updateWorker$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addWorker()` */
  static readonly AddWorkerPath = '/worker/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addWorker()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addWorker$Response(params: AddWorker$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addWorker(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addWorker$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addWorker(params: AddWorker$Params, context?: HttpContext): Observable<string> {
    return this.addWorker$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getWorkers()` */
  static readonly GetWorkersPath = '/worker/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWorkers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkers$Response(params?: GetWorkers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Worker>>> {
    return getWorkers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWorkers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkers(params?: GetWorkers$Params, context?: HttpContext): Observable<Array<Worker>> {
    return this.getWorkers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Worker>>): Array<Worker> => r.body)
    );
  }

  /** Path part for operation `getWorkerByEmail()` */
  static readonly GetWorkerByEmailPath = '/worker/get/one';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWorkerByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkerByEmail$Response(params: GetWorkerByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<Worker>> {
    return getWorkerByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWorkerByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkerByEmail(params: GetWorkerByEmail$Params, context?: HttpContext): Observable<Worker> {
    return this.getWorkerByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<Worker>): Worker => r.body)
    );
  }

  /** Path part for operation `getWorkersByCompany()` */
  static readonly GetWorkersByCompanyPath = '/worker/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWorkersByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkersByCompany$Response(params: GetWorkersByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Worker>>> {
    return getWorkersByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWorkersByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkersByCompany(params: GetWorkersByCompany$Params, context?: HttpContext): Observable<Array<Worker>> {
    return this.getWorkersByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Worker>>): Array<Worker> => r.body)
    );
  }

  /** Path part for operation `deleteWorker()` */
  static readonly DeleteWorkerPath = '/worker/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteWorker()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWorker$Response(params: DeleteWorker$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteWorker(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteWorker$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWorker(params: DeleteWorker$Params, context?: HttpContext): Observable<string> {
    return this.deleteWorker$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
