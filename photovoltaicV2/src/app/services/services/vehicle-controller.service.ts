/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getVehicles } from '../fn/vehicle-controller/get-vehicles';
import { GetVehicles$Params } from '../fn/vehicle-controller/get-vehicles';
import { Vehicule } from '../models/vehicule';

@Injectable({ providedIn: 'root' })
export class VehicleControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getVehicles()` */
  static readonly GetVehiclesPath = '/vehicle/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVehicles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVehicles$Response(params?: GetVehicles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Vehicule>>> {
    return getVehicles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getVehicles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVehicles(params?: GetVehicles$Params, context?: HttpContext): Observable<Array<Vehicule>> {
    return this.getVehicles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Vehicule>>): Array<Vehicule> => r.body)
    );
  }

}
