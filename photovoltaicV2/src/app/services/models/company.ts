/* tslint:disable */
/* eslint-disable */
import { Activity } from '../models/activity';
import { Battery } from '../models/battery';
import { Cable } from '../models/cable';
import { Construction } from '../models/construction';
import { Contactor } from '../models/contactor';
import { Customer } from '../models/customer';
import { Devis } from '../models/devis';
import { DevisRequest } from '../models/devis-request';
import { Inverter } from '../models/inverter';
import { Meter } from '../models/meter';
import { SolarPanel } from '../models/solar-panel';
import { Supplier } from '../models/supplier';
import { SystemFixing } from '../models/system-fixing';
import { Worker } from '../models/worker';
export interface Company {
  activityList?: Array<Activity>;
  address?: string;
  batteryList?: Array<Battery>;
  cableList?: Array<Cable>;
  constructionList?: Array<Construction>;
  contact?: string;
  contactor?: Contactor;
  customerList?: Array<Customer>;
  devisList?: Array<Devis>;
  devisRequestList?: Array<DevisRequest>;
  id?: number;
  inverterList?: Array<Inverter>;
  meterList?: Array<Meter>;
  name?: string;
  solarePanelList?: Array<SolarPanel>;
  supplierList?: Array<Supplier>;
  systemFixingList?: Array<SystemFixing>;
  workers?: Array<Worker>;
}
