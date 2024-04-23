/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SolarPanel } from '../../models/solar-panel';

export interface GetSolarPanelsByCompany$Params {
  id: number;
}

export function getSolarPanelsByCompany(http: HttpClient, rootUrl: string, params: GetSolarPanelsByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SolarPanel>>> {
  const rb = new RequestBuilder(rootUrl, getSolarPanelsByCompany.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SolarPanel>>;
    })
  );
}

getSolarPanelsByCompany.PATH = '/solarPanel/get/company/{id}';
