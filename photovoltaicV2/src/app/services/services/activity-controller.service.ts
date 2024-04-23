/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Activity } from '../models/activity';
import { ajouterJourTravailler } from '../fn/activity-controller/ajouter-jour-travailler';
import { AjouterJourTravailler$Params } from '../fn/activity-controller/ajouter-jour-travailler';
import { deleteActivities } from '../fn/activity-controller/delete-activities';
import { DeleteActivities$Params } from '../fn/activity-controller/delete-activities';
import { deleteActivity } from '../fn/activity-controller/delete-activity';
import { DeleteActivity$Params } from '../fn/activity-controller/delete-activity';
import { getActivities } from '../fn/activity-controller/get-activities';
import { GetActivities$Params } from '../fn/activity-controller/get-activities';
import { getActivitiesByCompany } from '../fn/activity-controller/get-activities-by-company';
import { GetActivitiesByCompany$Params } from '../fn/activity-controller/get-activities-by-company';
import { getActivitiesByWorkerId } from '../fn/activity-controller/get-activities-by-worker-id';
import { GetActivitiesByWorkerId$Params } from '../fn/activity-controller/get-activities-by-worker-id';
import { modifierEvenementChantier } from '../fn/activity-controller/modifier-evenement-chantier';
import { ModifierEvenementChantier$Params } from '../fn/activity-controller/modifier-evenement-chantier';

@Injectable({ providedIn: 'root' })
export class ActivityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierEvenementChantier()` */
  static readonly ModifierEvenementChantierPath = '/activity/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierEvenementChantier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierEvenementChantier$Response(params: ModifierEvenementChantier$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierEvenementChantier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierEvenementChantier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierEvenementChantier(params: ModifierEvenementChantier$Params, context?: HttpContext): Observable<string> {
    return this.modifierEvenementChantier$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterJourTravailler()` */
  static readonly AjouterJourTravaillerPath = '/activity/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterJourTravailler()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterJourTravailler$Response(params: AjouterJourTravailler$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterJourTravailler(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterJourTravailler$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterJourTravailler(params: AjouterJourTravailler$Params, context?: HttpContext): Observable<string> {
    return this.ajouterJourTravailler$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getActivities()` */
  static readonly GetActivitiesPath = '/activity/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActivities()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivities$Response(params?: GetActivities$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Activity>>> {
    return getActivities(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getActivities$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivities(params?: GetActivities$Params, context?: HttpContext): Observable<Array<Activity>> {
    return this.getActivities$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Activity>>): Array<Activity> => r.body)
    );
  }

  /** Path part for operation `getActivitiesByWorkerId()` */
  static readonly GetActivitiesByWorkerIdPath = '/activity/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActivitiesByWorkerId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivitiesByWorkerId$Response(params: GetActivitiesByWorkerId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Activity>>> {
    return getActivitiesByWorkerId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getActivitiesByWorkerId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivitiesByWorkerId(params: GetActivitiesByWorkerId$Params, context?: HttpContext): Observable<Array<Activity>> {
    return this.getActivitiesByWorkerId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Activity>>): Array<Activity> => r.body)
    );
  }

  /** Path part for operation `getActivitiesByCompany()` */
  static readonly GetActivitiesByCompanyPath = '/activity/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActivitiesByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivitiesByCompany$Response(params: GetActivitiesByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Activity>>> {
    return getActivitiesByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getActivitiesByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivitiesByCompany(params: GetActivitiesByCompany$Params, context?: HttpContext): Observable<Array<Activity>> {
    return this.getActivitiesByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Activity>>): Array<Activity> => r.body)
    );
  }

  /** Path part for operation `deleteActivities()` */
  static readonly DeleteActivitiesPath = '/activity/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteActivities()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteActivities$Response(params?: DeleteActivities$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteActivities(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteActivities$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteActivities(params?: DeleteActivities$Params, context?: HttpContext): Observable<string> {
    return this.deleteActivities$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deleteActivity()` */
  static readonly DeleteActivityPath = '/activity/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteActivity()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteActivity$Response(params: DeleteActivity$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteActivity(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteActivity$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteActivity(params: DeleteActivity$Params, context?: HttpContext): Observable<string> {
    return this.deleteActivity$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
