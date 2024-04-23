/* tslint:disable */
/* eslint-disable */
import { Spot } from '../models/spot';
import { Worker } from '../models/worker';
export interface Activity {
  company?: number;
  construction?: number;
  end_date?: string;
  id?: number;
  spots?: Array<Spot>;
  start_date?: string;
  text?: string;
  vehicule?: number;
  workers?: Array<Worker>;
}
