import {AfterViewInit, Component} from '@angular/core';
import {CustomService} from "../../services/services/custom.service";
import {TokenService} from "../../services/tokenService/token.service";
import {DevisRequestControllerService} from "../../services/services/devis-request-controller.service";
import {DevisRequest} from "../../services/models/devis-request";
import {Worker} from "../../services/models/worker";
import {SharedDataService} from "../../services/sharedDataService/shared-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-devis-request-list',
  templateUrl: './devis-request-list.component.html',
  styleUrls: ['./devis-request-list.component.css']
})
export class DevisRequestListComponent implements AfterViewInit {

  constructor(private customService: CustomService,
              private tokenService: TokenService,
              private devisRequestService: DevisRequestControllerService,
              private sharedDataService : SharedDataService,
              private router : Router) {
  }

  devisRequestList: Array<DevisRequest> = []
  worker: Worker = {
    id: 0, email: "", company: {id: ""}, profession: "", password: "", image: "",
    generaleInfo: {firstName: "", lastName: "", age: 0, address: ""},
    phone: "",
    activities: []
  }

  public getGestionnaireByEmail(): void {
    let decodedToken = this.tokenService.decodeToken(this.tokenService.token)
    this.customService.getWorkerByEmail(decodedToken.sub).subscribe({
      next: (res) => {
        this.worker = res
        this.getDevisRequestByCompanyId()
      }
    })
  }

  public getDevisRequestByCompanyId(): void {
    let companyId: any = this.worker.company
    this.devisRequestService.getDevisRequestsByCompany({
      id: companyId
    }).subscribe({
      next: (res) => {
        this.devisRequestList = res
      }, error: (err) => {
        console.log(err)
      }
    })
  }

  public selectDevisRequest(devisRequest : DevisRequest):void{
    this.sharedDataService.devisRequest = devisRequest
  }

  public navigateToCreateNewDevis(devisRequest : DevisRequest):void{
    this.selectDevisRequest(devisRequest)
    this.router.navigate(['photovoltaic/devis/add'])
  }

  ngAfterViewInit() {
    this.getGestionnaireByEmail()
  }
}
