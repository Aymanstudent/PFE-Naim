/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addSupplier } from '../fn/supplier-controller/add-supplier';
import { AddSupplier$Params } from '../fn/supplier-controller/add-supplier';
import { deleteSupplier } from '../fn/supplier-controller/delete-supplier';
import { DeleteSupplier$Params } from '../fn/supplier-controller/delete-supplier';
import { getSuppliers } from '../fn/supplier-controller/get-suppliers';
import { GetSuppliers$Params } from '../fn/supplier-controller/get-suppliers';
import { getSuppliersCompany } from '../fn/supplier-controller/get-suppliers-company';
import { GetSuppliersCompany$Params } from '../fn/supplier-controller/get-suppliers-company';
import { Supplier } from '../models/supplier';
import { updateSuplier } from '../fn/supplier-controller/update-suplier';
import { UpdateSuplier$Params } from '../fn/supplier-controller/update-suplier';

@Injectable({ providedIn: 'root' })
export class SupplierControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateSuplier()` */
  static readonly UpdateSuplierPath = '/supplier/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSuplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSuplier$Response(params: UpdateSuplier$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateSuplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSuplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSuplier(params: UpdateSuplier$Params, context?: HttpContext): Observable<string> {
    return this.updateSuplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addSupplier()` */
  static readonly AddSupplierPath = '/supplier/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addSupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSupplier$Response(params: AddSupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addSupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addSupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSupplier(params: AddSupplier$Params, context?: HttpContext): Observable<string> {
    return this.addSupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getSuppliers()` */
  static readonly GetSuppliersPath = '/supplier/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSuppliers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSuppliers$Response(params?: GetSuppliers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Supplier>>> {
    return getSuppliers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSuppliers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSuppliers(params?: GetSuppliers$Params, context?: HttpContext): Observable<Array<Supplier>> {
    return this.getSuppliers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Supplier>>): Array<Supplier> => r.body)
    );
  }

  /** Path part for operation `getSuppliersCompany()` */
  static readonly GetSuppliersCompanyPath = '/supplier/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSuppliersCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSuppliersCompany$Response(params: GetSuppliersCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Supplier>>> {
    return getSuppliersCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSuppliersCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSuppliersCompany(params: GetSuppliersCompany$Params, context?: HttpContext): Observable<Array<Supplier>> {
    return this.getSuppliersCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Supplier>>): Array<Supplier> => r.body)
    );
  }

  /** Path part for operation `deleteSupplier()` */
  static readonly DeleteSupplierPath = '/supplier/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSupplier()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSupplier$Response(params: DeleteSupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteSupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSupplier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSupplier(params: DeleteSupplier$Params, context?: HttpContext): Observable<string> {
    return this.deleteSupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
