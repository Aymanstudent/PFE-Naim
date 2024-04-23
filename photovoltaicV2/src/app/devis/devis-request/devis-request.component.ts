import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DevisRequestControllerService} from "../../services/services/devis-request-controller.service";
import {TokenService} from "../../services/tokenService/token.service";
import {DevisRequest} from "../../services/models/devis-request";
import {Company} from "../../services/models/company";
import {CustomService} from "../../services/services/custom.service";
import {WorkerControllerService} from "../../services/services/worker-controller.service";
import {Worker} from "../../services/models/worker";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {SharedDataService} from "../../services/sharedDataService/shared-data.service";
@Component({
  selector: 'app-devis-request',
  templateUrl: './devis-request.component.html',
  styleUrls: ['./devis-request.component.css']
})
export class DevisRequestComponent implements AfterViewInit{


  constructor(private devisRequestService: DevisRequestControllerService,
              private tokenService: TokenService,
              private customRequest: CustomService,
              private workerService : WorkerControllerService,
              private router : Router,
              private sharedDataService : SharedDataService) {
  }

  devisRequestList: Array<DevisRequest> = []
  company: Company = {}
  worker : Worker = {
    id : 0,email : "",company :{id : ""},profession : "",password :"",image : "",
    generaleInfo : {firstName : "",lastName : "",age : 0,address :""},
    phone : "",
    activities : []
  }
  devisRequest: DevisRequest = {
    id: 0, company: {id: ""}, location: "",
    potential_customer: {firstName: "", lastName: "", phone: "", email: ""},
    consumption: 0, electricity_access: false, post_code: "",roof_type : "",building_type : "",available_area : 0,status : ""
  }
  badRequest : boolean = false
  goodRequest : Boolean = false
  dataExist : boolean = false
  errorMessage : string = ""
  displayedColumns: string[] = ['location','nom du client', 'prenom du client', 'accée electrique', 'type de batiment' ,  'action'];
  dataSource = new MatTableDataSource<DevisRequest>(this.devisRequestList);
  posts: any
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

  public getDevisRequestListByCompanyId(id : any): void {
    this.devisRequestService.getDevisRequestsByCompany({
      id : id
    }).subscribe({
      next:(res)=>{
        if(res.length != 0){
          this.dataExist = true
        }
        console.log(res)
        this.posts = res
        this.dataSource = new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  public getSecretaireByEmail():void{
    let decodedToken = this.tokenService.decodeToken(this.tokenService.token)
    this.customRequest.getWorkerByEmail(decodedToken.sub).subscribe({
      next:(res)=>{
        this.worker = res
        this.getDevisRequestListByCompanyId(this.worker.company)
      }
    })
  }

  public selectDevisRequest(devisRequest : DevisRequest):void{
    this.devisRequest = devisRequest;
    this.sharedDataService.company = this.company
  }

  public navigateToCreateNewDevisRequest():void{
    this.router.navigate(['photovoltaic/devisRequest/add'])
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

  public deleteDevisRequest(): void {
    this.devisRequestService.deleteDevisRequestById({
      id : this.devisRequest.id
    }).subscribe({
      error:(err)=>{
        if(err.status === 200){
          this.errorMessage += err.error.text
          location.reload()
        }
      }
    })
  }

  applyFilter() {
    const filterValue = (event?.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  ngAfterViewInit() {
    this.getSecretaireByEmail()
  }
}
