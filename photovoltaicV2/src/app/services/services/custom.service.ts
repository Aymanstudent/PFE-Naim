import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Contactor} from "../models/contactor";
import {Observable} from "rxjs";
import {Worker} from "../models/worker";

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  authLink : string = "http://localhost:8080/auth"
  contactorLink : string = "http://localhost:8080/contactor"
  workerLink : string = "http://localhost:8080/worker"
  solarPanelLink : string = "http://localhost:8080/solarPanel"
  constructor(private Http : HttpClient) { }

  public getSolarPanelById(id : any):Observable<any>{
    return this.Http.get(this.solarPanelLink + '/get/solarPanel/'+  id)
  }

  public getContactorAccount(email : String):Observable<Object>{
    return this.Http.get(this.authLink + '/get/account/' + email)
  }

  public activateAccountByAdmin(contactor : Contactor):Observable<Object>{
    return this.Http.put(this.authLink + '/activate-account/contactor', contactor)
  }

  public disableAccountByAdmin(contactor : Contactor):Observable<Object>{
    return this.Http.put(this.authLink + '/disable-account/contactor', contactor)
  }

  public activateAccountWorkerByAdmin(worker : Worker):Observable<Object>{
    return this.Http.put(this.authLink + '/activate-account/worker', worker)
  }

  public disableAccountWorkerByAdmin(worker : Worker):Observable<Object>{
    return this.Http.put(this.authLink + '/disable-account/worker', worker)
  }

  public getContactorByEmail(email : string):Observable<any>{
    return this.Http.get(this.contactorLink + '/get/one/by-email/' + email)
  }

  public getWorkerByEmail(email : string):Observable<any>{
    return this.Http.get(this.workerLink + '/get/one/' + email)
  }
}
