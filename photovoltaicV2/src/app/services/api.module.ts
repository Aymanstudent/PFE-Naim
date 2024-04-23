/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { WorkerControllerService } from './services/worker-controller.service';
import { SystemFixingControllerService } from './services/system-fixing-controller.service';
import { SupplierControllerService } from './services/supplier-controller.service';
import { SolarPanelControllerService } from './services/solar-panel-controller.service';
import { MeterControllerService } from './services/meter-controller.service';
import { InverterControllerService } from './services/inverter-controller.service';
import { DevisRequestControllerService } from './services/devis-request-controller.service';
import { DevisControllerService } from './services/devis-controller.service';
import { CustomerControllerService } from './services/customer-controller.service';
import { ContactorControllerService } from './services/contactor-controller.service';
import { ConstructionControllerService } from './services/construction-controller.service';
import { CableControllerService } from './services/cable-controller.service';
import { BatteryControllerService } from './services/battery-controller.service';
import { ActivityControllerService } from './services/activity-controller.service';
import { EmailSenderControllerService } from './services/email-sender-controller.service';
import { ContactorRequestControllerService } from './services/contactor-request-controller.service';
import { CompanyControllerService } from './services/company-controller.service';
import { BillControllerService } from './services/bill-controller.service';
import { AuthenticationService } from './services/authentication.service';
import { AmendmentControllerService } from './services/amendment-controller.service';
import { VehicleControllerService } from './services/vehicle-controller.service';
import { SpotControllerService } from './services/spot-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    WorkerControllerService,
    SystemFixingControllerService,
    SupplierControllerService,
    SolarPanelControllerService,
    MeterControllerService,
    InverterControllerService,
    DevisRequestControllerService,
    DevisControllerService,
    CustomerControllerService,
    ContactorControllerService,
    ConstructionControllerService,
    CableControllerService,
    BatteryControllerService,
    ActivityControllerService,
    EmailSenderControllerService,
    ContactorRequestControllerService,
    CompanyControllerService,
    BillControllerService,
    AuthenticationService,
    AmendmentControllerService,
    VehicleControllerService,
    SpotControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
