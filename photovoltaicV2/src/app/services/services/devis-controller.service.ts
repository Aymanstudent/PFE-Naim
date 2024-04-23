/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addDevis } from '../fn/devis-controller/add-devis';
import { AddDevis$Params } from '../fn/devis-controller/add-devis';
import { deleteDevis } from '../fn/devis-controller/delete-devis';
import { DeleteDevis$Params } from '../fn/devis-controller/delete-devis';
import { Devis } from '../models/devis';
import { getDevis } from '../fn/devis-controller/get-devis';
import { GetDevis$Params } from '../fn/devis-controller/get-devis';
import { getDevisByCompany } from '../fn/devis-controller/get-devis-by-company';
import { GetDevisByCompany$Params } from '../fn/devis-controller/get-devis-by-company';
import { getDevisById } from '../fn/devis-controller/get-devis-by-id';
import { GetDevisById$Params } from '../fn/devis-controller/get-devis-by-id';
import { supprimerTout } from '../fn/devis-controller/supprimer-tout';
import { SupprimerTout$Params } from '../fn/devis-controller/supprimer-tout';
import { updateDevis } from '../fn/devis-controller/update-devis';
import { UpdateDevis$Params } from '../fn/devis-controller/update-devis';

@Injectable({ providedIn: 'root' })
export class DevisControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateDevis()` */
  static readonly UpdateDevisPath = '/devis/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDevis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDevis$Response(params: UpdateDevis$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateDevis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateDevis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDevis(params: UpdateDevis$Params, context?: HttpContext): Observable<string> {
    return this.updateDevis$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addDevis()` */
  static readonly AddDevisPath = '/devis/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addDevis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addDevis$Response(params: AddDevis$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addDevis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addDevis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addDevis(params: AddDevis$Params, context?: HttpContext): Observable<string> {
    return this.addDevis$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getDevis()` */
  static readonly GetDevisPath = '/devis/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDevis()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevis$Response(params?: GetDevis$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Devis>>> {
    return getDevis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDevis$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevis(params?: GetDevis$Params, context?: HttpContext): Observable<Array<Devis>> {
    return this.getDevis$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Devis>>): Array<Devis> => r.body)
    );
  }

  /** Path part for operation `getDevisById()` */
  static readonly GetDevisByIdPath = '/devis/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDevisById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevisById$Response(params: GetDevisById$Params, context?: HttpContext): Observable<StrictHttpResponse<Devis>> {
    return getDevisById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDevisById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevisById(params: GetDevisById$Params, context?: HttpContext): Observable<Devis> {
    return this.getDevisById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Devis>): Devis => r.body)
    );
  }

  /** Path part for operation `getDevisByCompany()` */
  static readonly GetDevisByCompanyPath = '/devis/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDevisByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevisByCompany$Response(params: GetDevisByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Devis>>> {
    return getDevisByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDevisByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevisByCompany(params: GetDevisByCompany$Params, context?: HttpContext): Observable<Array<Devis>> {
    return this.getDevisByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Devis>>): Array<Devis> => r.body)
    );
  }

  /** Path part for operation `supprimerTout()` */
  static readonly SupprimerToutPath = '/devis/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerTout()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerTout$Response(params?: SupprimerTout$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerTout(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerTout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerTout(params?: SupprimerTout$Params, context?: HttpContext): Observable<string> {
    return this.supprimerTout$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deleteDevis()` */
  static readonly DeleteDevisPath = '/devis/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDevis()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDevis$Response(params: DeleteDevis$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteDevis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDevis$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDevis(params: DeleteDevis$Params, context?: HttpContext): Observable<string> {
    return this.deleteDevis$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
