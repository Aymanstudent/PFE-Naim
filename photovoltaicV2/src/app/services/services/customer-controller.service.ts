/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCustomer } from '../fn/customer-controller/add-customer';
import { AddCustomer$Params } from '../fn/customer-controller/add-customer';
import { Customer } from '../models/customer';
import { deleteCustomer } from '../fn/customer-controller/delete-customer';
import { DeleteCustomer$Params } from '../fn/customer-controller/delete-customer';
import { getCustomerById } from '../fn/customer-controller/get-customer-by-id';
import { GetCustomerById$Params } from '../fn/customer-controller/get-customer-by-id';
import { getCustomers } from '../fn/customer-controller/get-customers';
import { GetCustomers$Params } from '../fn/customer-controller/get-customers';
import { getCustomersByCompany } from '../fn/customer-controller/get-customers-by-company';
import { GetCustomersByCompany$Params } from '../fn/customer-controller/get-customers-by-company';
import { supprimerTout1 } from '../fn/customer-controller/supprimer-tout-1';
import { SupprimerTout1$Params } from '../fn/customer-controller/supprimer-tout-1';
import { updateCustomer } from '../fn/customer-controller/update-customer';
import { UpdateCustomer$Params } from '../fn/customer-controller/update-customer';

@Injectable({ providedIn: 'root' })
export class CustomerControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateCustomer()` */
  static readonly UpdateCustomerPath = '/customer/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCustomer$Response(params: UpdateCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCustomer(params: UpdateCustomer$Params, context?: HttpContext): Observable<string> {
    return this.updateCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addCustomer()` */
  static readonly AddCustomerPath = '/customer/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCustomer$Response(params: AddCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return addCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCustomer(params: AddCustomer$Params, context?: HttpContext): Observable<Customer> {
    return this.addCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

  /** Path part for operation `getCustomers()` */
  static readonly GetCustomersPath = '/customer/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCustomers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomers$Response(params?: GetCustomers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Customer>>> {
    return getCustomers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCustomers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomers(params?: GetCustomers$Params, context?: HttpContext): Observable<Array<Customer>> {
    return this.getCustomers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Customer>>): Array<Customer> => r.body)
    );
  }

  /** Path part for operation `getCustomerById()` */
  static readonly GetCustomerByIdPath = '/customer/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCustomerById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomerById$Response(params: GetCustomerById$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return getCustomerById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCustomerById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomerById(params: GetCustomerById$Params, context?: HttpContext): Observable<Customer> {
    return this.getCustomerById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

  /** Path part for operation `getCustomersByCompany()` */
  static readonly GetCustomersByCompanyPath = '/customer/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCustomersByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomersByCompany$Response(params: GetCustomersByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Customer>>> {
    return getCustomersByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCustomersByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomersByCompany(params: GetCustomersByCompany$Params, context?: HttpContext): Observable<Array<Customer>> {
    return this.getCustomersByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Customer>>): Array<Customer> => r.body)
    );
  }

  /** Path part for operation `supprimerTout1()` */
  static readonly SupprimerTout1Path = '/customer/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerTout1()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerTout1$Response(params?: SupprimerTout1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerTout1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerTout1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerTout1(params?: SupprimerTout1$Params, context?: HttpContext): Observable<string> {
    return this.supprimerTout1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deleteCustomer()` */
  static readonly DeleteCustomerPath = '/customer/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCustomer()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCustomer$Response(params: DeleteCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCustomer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCustomer(params: DeleteCustomer$Params, context?: HttpContext): Observable<string> {
    return this.deleteCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
