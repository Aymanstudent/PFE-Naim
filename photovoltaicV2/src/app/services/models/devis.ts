/* tslint:disable */
/* eslint-disable */
import { MaterielBattery } from '../models/materiel-battery';
import { MaterielCable } from '../models/materiel-cable';
import { MaterielInverter } from '../models/materiel-inverter';
import { MaterielMeter } from '../models/materiel-meter';
import { MaterielSolarPanel } from '../models/materiel-solar-panel';
import { MaterielSystemFixing } from '../models/materiel-system-fixing';
export interface Devis {
  battery: MaterielBattery;
  cable: MaterielCable;
  company: {id : string};
  construction?: { id : string };
  date: string;
  etat: string;
  id: number;
  inverter: MaterielInverter;
  meter: MaterielMeter;
  ref: string;
  solarPanel: MaterielSolarPanel;
  status: string;
  systemFixing: MaterielSystemFixing;
  total: number;
}
