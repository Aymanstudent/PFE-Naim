/* tslint:disable */
/* eslint-disable */
import { Activity } from '../models/activity';
import { Amendment } from '../models/amendment';
import { Bill } from '../models/bill';
import { Company } from '../models/company';
import { Devis } from '../models/devis';
export interface Construction {
  activities?: Array<Activity>;
  amendment?: Array<Amendment>;
  billList?: Array<Bill>;
  company?: Company;
  customer?: number;
  description?: string;
  devisList?: Array<Devis>;
  id?: number;
  location?: string;
}
