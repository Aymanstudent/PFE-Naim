/* tslint:disable */
/* eslint-disable */
import { PotentialCustomer } from '../models/potential-customer';
export interface DevisRequest {
  available_area: number;
  building_type: string;
  company: {id : string};
  consumption: number;
  electricity_access: boolean;
  id: number;
  location: string;
  post_code: string;
  potential_customer: PotentialCustomer;
  roof_type: string;
  status: string;
}
