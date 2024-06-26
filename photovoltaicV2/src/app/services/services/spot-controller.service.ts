/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getSpots } from '../fn/spot-controller/get-spots';
import { GetSpots$Params } from '../fn/spot-controller/get-spots';
import { Spot } from '../models/spot';

@Injectable({ providedIn: 'root' })
export class SpotControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getSpots()` */
  static readonly GetSpotsPath = '/spot/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSpots()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSpots$Response(params?: GetSpots$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Spot>>> {
    return getSpots(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSpots$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSpots(params?: GetSpots$Params, context?: HttpContext): Observable<Array<Spot>> {
    return this.getSpots$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Spot>>): Array<Spot> => r.body)
    );
  }

}
