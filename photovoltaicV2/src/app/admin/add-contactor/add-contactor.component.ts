import {AfterViewInit, Component} from '@angular/core';
import {SharedDataService} from "../../services/sharedDataService/shared-data.service";
import {ContactorControllerService} from "../../services/services/contactor-controller.service";
import {Contactor} from "../../services/models/contactor";
import {Company} from "../../services/models/company";
import {CompanyControllerService} from "../../services/services/company-controller.service";
import {ContactorRequest} from "../../services/models/contactor-request";
import {AuthenticationService} from "../../services/services/authentication.service";
import {RegistrationRequest} from "../../services/models/registration-request";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-contactor',
  templateUrl: './add-contactor.component.html',
  styleUrls: ['./add-contactor.component.css']
})
export class AddContactorComponent implements AfterViewInit {

  constructor(private sharedDataService: SharedDataService,
              private contactorService: ContactorControllerService,
              private registerService: AuthenticationService,
              private router : Router) {
  }

  contactorRequest: ContactorRequest = {}

  contactor: Contactor = {
    id: 0, person: {firstName: "", lastName: "", age: 0, address: ""}, email: ""
  }

  user: RegistrationRequest = {
    nom: "", prenom: "", email: "", password: "", role: "ENTREPRENEUR"
  }

  public addContactor() {
    this.contactorService.addContactor({
      body: this.contactor
    }).subscribe({
      error: (err) => {
        console.log(err)
      }
    })
  }

  public registerContacor():void{
    this.registerService.register({
      body : this.user
    }).subscribe({
      error:(err)=>console.log(err)
    })
  }

  public createNewContactor():void{
    this.addContactor();
    this.registerContacor();
    this.router.navigate(['photovoltaic/contactor'])
  }

  ngAfterViewInit() {
    this.contactorRequest = this.sharedDataService.contactorRequest
  }
}
