/* tslint:disable */
/* eslint-disable */
import { Company } from '../models/company';
import { Construction } from '../models/construction';
import { Person } from '../models/person';
export interface Customer {
  company?: Company;
  constructions?: Array<Construction>;
  email?: string;
  generaleInfo?: Person;
  id?: number;
  phone?: string;
}
