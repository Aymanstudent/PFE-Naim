import { Injectable } from '@angular/core';
import {Contactor} from "../models/contactor";
import {ContactorRequest} from "../models/contactor-request";
import {Company} from "../models/company";
import {DevisRequest} from "../models/devis-request";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }


  public contactor : Contactor = {
    id: 0,
    company: {id: ""}, email: "",
    person: {age: 0, firstName: "", lastName: "", address: ""}
  }

  public contactorRequest: ContactorRequest = {
    id: 0, firstName: "", lastName: "", message: "", companyName: "", companyAddress: "", phone: "", email: ""
  }

  public company : Company = {

  }

  devisRequest: DevisRequest = {
    id: 0, company: {id: ""}, location: "",
    potential_customer: {firstName: "", lastName: "", phone: "", email: ""},
    consumption: 0, electricity_access: false, post_code: "",roof_type : "",building_type : "",available_area : 0,status : ""
  }
}
