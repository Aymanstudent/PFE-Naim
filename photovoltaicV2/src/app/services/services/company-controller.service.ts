/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCompany } from '../fn/company-controller/add-company';
import { AddCompany$Params } from '../fn/company-controller/add-company';
import { Company } from '../models/company';
import { getAllCompanies } from '../fn/company-controller/get-all-companies';
import { GetAllCompanies$Params } from '../fn/company-controller/get-all-companies';
import { getCompanyById } from '../fn/company-controller/get-company-by-id';
import { GetCompanyById$Params } from '../fn/company-controller/get-company-by-id';

@Injectable({ providedIn: 'root' })
export class CompanyControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addCompany()` */
  static readonly AddCompanyPath = '/company/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCompany()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCompany$Response(params: AddCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Company>> {
    return addCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCompany$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCompany(params: AddCompany$Params, context?: HttpContext): Observable<Company> {
    return this.addCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Company>): Company => r.body)
    );
  }

  /** Path part for operation `getAllCompanies()` */
  static readonly GetAllCompaniesPath = '/company/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCompanies()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCompanies$Response(params?: GetAllCompanies$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Company>>> {
    return getAllCompanies(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCompanies$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCompanies(params?: GetAllCompanies$Params, context?: HttpContext): Observable<Array<Company>> {
    return this.getAllCompanies$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Company>>): Array<Company> => r.body)
    );
  }

  /** Path part for operation `getCompanyById()` */
  static readonly GetCompanyByIdPath = '/company/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCompanyById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompanyById$Response(params: GetCompanyById$Params, context?: HttpContext): Observable<StrictHttpResponse<Company>> {
    return getCompanyById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCompanyById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompanyById(params: GetCompanyById$Params, context?: HttpContext): Observable<Company> {
    return this.getCompanyById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Company>): Company => r.body)
    );
  }

}
