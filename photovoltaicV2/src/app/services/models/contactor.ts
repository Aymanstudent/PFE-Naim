/* tslint:disable */
/* eslint-disable */
import {Person} from '../models/person';

export interface Contactor {
  company?: { id: string };
  email: string;
  id: number;
  person: Person;
}
