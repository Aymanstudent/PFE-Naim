/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addSolarPanel } from '../fn/solar-panel-controller/add-solar-panel';
import { AddSolarPanel$Params } from '../fn/solar-panel-controller/add-solar-panel';
import { countSolarPanelByModel } from '../fn/solar-panel-controller/count-solar-panel-by-model';
import { CountSolarPanelByModel$Params } from '../fn/solar-panel-controller/count-solar-panel-by-model';
import { deleteSolarPanelById } from '../fn/solar-panel-controller/delete-solar-panel-by-id';
import { DeleteSolarPanelById$Params } from '../fn/solar-panel-controller/delete-solar-panel-by-id';
import { getSolarPanels } from '../fn/solar-panel-controller/get-solar-panels';
import { GetSolarPanels$Params } from '../fn/solar-panel-controller/get-solar-panels';
import { getSolarPanelsByCompany } from '../fn/solar-panel-controller/get-solar-panels-by-company';
import { GetSolarPanelsByCompany$Params } from '../fn/solar-panel-controller/get-solar-panels-by-company';
import { SolarPanel } from '../models/solar-panel';
import { updateSolarPanel } from '../fn/solar-panel-controller/update-solar-panel';
import { UpdateSolarPanel$Params } from '../fn/solar-panel-controller/update-solar-panel';

@Injectable({ providedIn: 'root' })
export class SolarPanelControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateSolarPanel()` */
  static readonly UpdateSolarPanelPath = '/solarPanel/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSolarPanel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSolarPanel$Response(params: UpdateSolarPanel$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateSolarPanel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSolarPanel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSolarPanel(params: UpdateSolarPanel$Params, context?: HttpContext): Observable<string> {
    return this.updateSolarPanel$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addSolarPanel()` */
  static readonly AddSolarPanelPath = '/solarPanel/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addSolarPanel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSolarPanel$Response(params: AddSolarPanel$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addSolarPanel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addSolarPanel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSolarPanel(params: AddSolarPanel$Params, context?: HttpContext): Observable<string> {
    return this.addSolarPanel$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getSolarPanels()` */
  static readonly GetSolarPanelsPath = '/solarPanel/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSolarPanels()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSolarPanels$Response(params?: GetSolarPanels$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SolarPanel>>> {
    return getSolarPanels(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSolarPanels$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSolarPanels(params?: GetSolarPanels$Params, context?: HttpContext): Observable<Array<SolarPanel>> {
    return this.getSolarPanels$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SolarPanel>>): Array<SolarPanel> => r.body)
    );
  }

  /** Path part for operation `countSolarPanelByModel()` */
  static readonly CountSolarPanelByModelPath = '/solarPanel/get/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countSolarPanelByModel()` instead.
   *
   * This method doesn't expect any request body.
   */
  countSolarPanelByModel$Response(params?: CountSolarPanelByModel$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
}>>> {
    return countSolarPanelByModel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countSolarPanelByModel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countSolarPanelByModel(params?: CountSolarPanelByModel$Params, context?: HttpContext): Observable<Array<{
}>> {
    return this.countSolarPanelByModel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{
}>>): Array<{
}> => r.body)
    );
  }

  /** Path part for operation `getSolarPanelsByCompany()` */
  static readonly GetSolarPanelsByCompanyPath = '/solarPanel/get/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSolarPanelsByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSolarPanelsByCompany$Response(params: GetSolarPanelsByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SolarPanel>>> {
    return getSolarPanelsByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSolarPanelsByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSolarPanelsByCompany(params: GetSolarPanelsByCompany$Params, context?: HttpContext): Observable<Array<SolarPanel>> {
    return this.getSolarPanelsByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SolarPanel>>): Array<SolarPanel> => r.body)
    );
  }

  /** Path part for operation `deleteSolarPanelById()` */
  static readonly DeleteSolarPanelByIdPath = '/solarPanel/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSolarPanelById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSolarPanelById$Response(params: DeleteSolarPanelById$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteSolarPanelById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSolarPanelById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSolarPanelById(params: DeleteSolarPanelById$Params, context?: HttpContext): Observable<string> {
    return this.deleteSolarPanelById$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
