/* tslint:disable */
/* eslint-disable */
import {Activity} from '../models/activity';
import {Person} from '../models/person';

export interface Worker {
  activities: Array<Activity>;
  company: { id : string };
  email: string;
  generaleInfo: Person;
  id: number;
  image: string;
  password: string;
  phone: string;
  profession: string;
}
