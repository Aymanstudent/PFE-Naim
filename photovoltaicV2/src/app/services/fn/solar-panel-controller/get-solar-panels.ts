/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SolarPanel } from '../../models/solar-panel';

export interface GetSolarPanels$Params {
}

export function getSolarPanels(http: HttpClient, rootUrl: string, params?: GetSolarPanels$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SolarPanel>>> {
  const rb = new RequestBuilder(rootUrl, getSolarPanels.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SolarPanel>>;
    })
  );
}

getSolarPanels.PATH = '/solarPanel/get';
