import {AfterViewInit, Component} from '@angular/core';
import {ContactorRequestControllerService} from "../../services/services/contactor-request-controller.service";
import {ContactorRequest} from "../../services/models/contactor-request";
import {Contactor} from "../../services/models/contactor";
import {Router} from "@angular/router";
import {SharedDataService} from "../../services/sharedDataService/shared-data.service";

@Component({
  selector: 'app-contactor-request-list',
  templateUrl: './contactor-request-list.component.html',
  styleUrls: ['./contactor-request-list.component.css']
})
export class ContactorRequestListComponent implements AfterViewInit {

  constructor(private contactorRequestService: ContactorRequestControllerService,
              private route: Router,
              private sharedDataService: SharedDataService) {
  }

  contactorRequests: Array<ContactorRequest> = []
  errorMessage: string = ""
  contactorRequest: ContactorRequest = {
    id: 0, firstName: "", lastName: "", message: "", companyName: "", companyAddress: "", phone: "", email: ""
  }

  public selectRequest(contactorRequest: ContactorRequest) {
    this.sharedDataService.contactorRequest = contactorRequest
    this.contactorRequest = contactorRequest
  }

  public navigateToCreateContactor(): void {
    this.route.navigate(['photovoltaic/contactor/new'])
  }

  public getContactorRequests(): void {
    this.contactorRequestService.getContactorRequests().subscribe({
      next: (res) => {
        this.contactorRequests = res
      }
    })
  }

  public deleteContractRequest(): void {
    this.contactorRequestService.deleteContactorRequest({
      id: this.contactorRequest.id
    }).subscribe({
      next: (res) => {
        console.log(res)
      }
    })
    location.reload()
  }


  ngAfterViewInit() {
    this.getContactorRequests()
  }

}
