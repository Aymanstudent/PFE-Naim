import {AfterViewInit, Component} from '@angular/core';
import {DevisRequestControllerService} from "../../services/services/devis-request-controller.service";
import {DevisRequest} from "../../services/models/devis-request";
import {CustomService} from "../../services/services/custom.service";
import {TokenService} from "../../services/tokenService/token.service";
import {Worker} from "../../services/models/worker";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-devis-request',
  templateUrl: './add-devis-request.component.html',
  styleUrls: ['./add-devis-request.component.css']
})
export class AddDevisRequestComponent implements AfterViewInit{
  constructor(private devisRequestService : DevisRequestControllerService,
              private customService : CustomService,
              private tokenService : TokenService,
              private router : Router) {
  }

  devisRequest: DevisRequest = {
    id: 0, company: {id: ""}, location: "",
    potential_customer: {firstName: "", lastName: "", phone: "", email: ""},
    consumption: 0, electricity_access: false, post_code: "",roof_type : "",building_type : "",available_area : 0,status : ""
  }

  worker : Worker = {
    id : 0,email : "",company :{id : ""},profession : "",password :"",image : "",
    generaleInfo : {firstName : "",lastName : "",age : 0,address :""},
    phone : "",
    activities : []
  }

  roofs: string[] = ["Toiture cintrée en berceau",
    "Toiture à 3 pans", "Toiture à 4 pans", "Toiture cintrée à simple courbure concave",
    "Toiture à demi-croupe normande", "Toiture à demi-croupe, croupe champenoise",
    "Toiture à demi-croupe débordante", "Toiture à demi-croupe", "Toiture pavillon",
    "Toiture papillon", "Toiture en L", "Toiture à 2 pans ou 2 versants", "Toiture en T", "Toiture à double courbure",
    "Toit monopente, à pupitre ou en appentis", "Toiture shed, à redans partiels ou en dents de scie", "Toiture à la Mansart avec terrasson, brisis et ligne de bris",
    "Toiture à coyers ou coyaux", "Tourelle conique à base circulaire", "Tourelle à pans à base hexagonale", "Toiture en dôme ou coupole"]
  buildings: string[] = ["industrielle spécialisée",
    "résidentiel", "commercial et institutionnel"]

  public selectRoofType(event : any){
    this.devisRequest.roof_type = event.target.value
  }

  public selectBuildingType(event : any){
    this.devisRequest.building_type = event.target.value
  }

  public selectYesORNO(event : any){
    this.devisRequest.electricity_access = event.target.value
  }

  public getSecretaireByEmail():void{
    let decodedToken = this.tokenService.decodeToken(this.tokenService.token)
    this.customService.getWorkerByEmail(decodedToken.sub).subscribe({
      next:(res)=>{
        this.worker = res
      }
    })
  }

  public addDevisRequest():void{
    this.devisRequest.company = {id: String(this.worker.company)}
    console.log(this.devisRequest)
    this.devisRequestService.addDevisRequest({
      body : this.devisRequest
    }).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigate(['photovoltaic/devisRequest'])
      },error:(err)=>{
        console.log(err)
      }
    })
  }

  ngAfterViewInit() {
    this.getSecretaireByEmail()
  }
}
