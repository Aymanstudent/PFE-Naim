import {AfterViewInit, Component} from '@angular/core';
import {CompanyControllerService} from "../services/services/company-controller.service";
import {ContactorControllerService} from "../services/services/contactor-controller.service";
import {Company} from "../services/models/company";
import {Contactor} from "../services/models/contactor";
import {TokenService} from "../services/tokenService/token.service";
import {CustomService} from "../services/services/custom.service";
import {Construction} from "../services/models/construction";
import {SolarPanel} from "../services/models/solar-panel";
import {SystemFixing} from "../services/models/system-fixing";
import {Cable} from "../services/models/cable";
import {Battery} from "../services/models/battery";
import {Meter} from "../services/models/meter";
import {SolarPanelControllerService} from "../services/services/solar-panel-controller.service";
import {InverterControllerService} from "../services/services/inverter-controller.service";
import {CableControllerService} from "../services/services/cable-controller.service";
import {MeterControllerService} from "../services/services/meter-controller.service";
import {BatteryControllerService} from "../services/services/battery-controller.service";
import {SystemFixingControllerService} from "../services/services/system-fixing-controller.service";
import {Worker} from "../services/models/worker";
import {DevisRequest} from "../services/models/devis-request";
import {ConstructionControllerService} from "../services/services/construction-controller.service";
import {WorkerControllerService} from "../services/services/worker-controller.service";
import {DevisRequestControllerService} from "../services/services/devis-request-controller.service";
import {Inverter} from "../services/models/inverter";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {

  constructor(private companyService: CompanyControllerService,
              private contactorService: ContactorControllerService,
              private tokenService: TokenService,
              private customService: CustomService,
              private solarPanelService: SolarPanelControllerService,
              private inverterService: InverterControllerService,
              private cableService: CableControllerService,
              private meterService: MeterControllerService,
              private batteryService: BatteryControllerService,
              private systemFixingService: SystemFixingControllerService,
              private constructionService : ConstructionControllerService,
              private workerService : WorkerControllerService,
              private devisRequestService : DevisRequestControllerService) {
  }

  constructionList: Array<Construction> = []
  workersList : Array<Worker> = []
  devisRequestList : Array<DevisRequest> = []
  solarPanelList: Array<SolarPanel> = []
  systemFixingList: Array<SystemFixing> = []
  inverterList: Array<Inverter> = []
  cableList: Array<Cable> = []
  batteryList: Array<Battery> = []
  meterList: Array<Meter> = []
  maxStock = 400
  spPercent : number = this.solarPanelList.length * 100 /this.maxStock
  sfPercent : number = this.systemFixingList.length * 100 /this.maxStock
  invPercent : number = this.inverterList.length * 100 /this.maxStock
  metPercent : number = this.meterList.length * 100 /this.maxStock
  batPercent : number = this.batteryList.length * 100 /this.maxStock
  cabPercent : number = this.cableList.length * 100 /this.maxStock
  companyAdded: boolean = false
  errMessage: string = ""
  company: Company = {
    name: "", address: "", contact: ""
  }

  contactor: Contactor = {
    email: "",
    id: 0,
    person: {firstName: "", lastName: "", address: "", age: 0},
    company: {id: ""}
  }

  newCompany: Company = {}
  decodedToken: any

  public solarPanelStockPercent():number{
    let quantity = 0
    for (let i = 0; i < this.solarPanelList.length; i++){
      quantity += this.solarPanelList[i].quantity
    }
    return quantity * 100 /this.maxStock
  }

  public inverterStockPercent():number{
    let quantity = 0
    for (let i = 0; i < this.inverterList.length; i++){
      quantity += this.inverterList[i].quantity
    }
    return quantity * 100 /this.maxStock
  }


  public meterStockPercent():number{
    let quantity = 0
    for (let i = 0; i < this.meterList.length; i++){
      quantity += this.meterList[i].quantity
    }
    return quantity * 100 /this.maxStock
  }


  public getContactorByEmail(): void {
    let token: string = this.tokenService.token
    this.decodedToken = this.tokenService.decodeToken(token)
    this.customService.getContactorByEmail(this.decodedToken.sub).subscribe({
      next: (res) => {
        this.contactor = res
        this.getCompanyById(this.contactor.company)
        if (this.contactor.company != null) {
          this.getSolarPanelListBYCompanyId(this.contactor.company)
          this.getInverterByCompanyId(this.contactor.company)
          this.getCableByCompanyId(this.contactor.company)
          this.getBatteryByCompanyId(this.contactor.company)
          this.getSystemFixingByCompanyId(this.contactor.company)
          this.getMeterByCompanyId(this.contactor.company)
          this.getWorkerByCompanyId(this.contactor.company)
          this.getConstructionByCompanyId(this.contactor.company)
          this.getDevisRequestByCompanyId(this.contactor.company)
        }
      }
    })
  }

  public getConstructionByCompanyId(id : any){
    this.constructionService.getConstructionByCompany({
      id : id
    }).subscribe({
      next:(res)=>{
        this.constructionList = res
      }
    })
  }

  public getDevisRequestByCompanyId(id : any){
    this.devisRequestService.getDevisRequestsByCompany({
      id : id
    }).subscribe({
      next:(res)=>{
        this.devisRequestList = res
      }
    })
  }

  public getWorkerByCompanyId(id : any){
    this.workerService.getWorkersByCompany({
      id : id
    }).subscribe({
      next:(res)=>{
        this.workersList = res
      }
    })
  }

  public getSolarPanelListBYCompanyId(id: any) {
    this.solarPanelService.getSolarPanelsByCompany({
      id: id
    }).subscribe({
      next: (res) => {
        this.solarPanelList = res
      }
    })
  }

  public getInverterByCompanyId(id: any) {
    this.inverterService.getInvertersByCompany({
      id: id
    }).subscribe({
      next: (res) => {
        this.inverterList = res
      }
    })
  }

  public getCableByCompanyId(id: any) {
    this.cableService.getCablesByCompany({
      id: id
    }).subscribe({
      next: (res) => {
        this.cableList = res
      }
    })
  }

  public getBatteryByCompanyId(id: any) {
    this.batteryService.getBatteriesByCompanyId({
      id: id
    }).subscribe({
      next: (res) => {
        this.batteryList = res
      }
    })
  }

  public getMeterByCompanyId(id: any) {
    this.meterService.getMetersByCompany({
      id: id
    }).subscribe({
      next: (res) => {
        this.meterList = res
      }
    })
  }

  public getSystemFixingByCompanyId(id: any) {
    this.systemFixingService.getSystemFixingsByCompany({
      id: id
    }).subscribe({
      next: (res) => {
        this.systemFixingList = res
      }
    })
  }

  public getCompanyById(id: any) {
    this.companyService.getCompanyById({
      id: id
    }).subscribe({
      next: (res) => {
        this.company = res
        this.companyAdded = true
      }
    })
  }

  public updateContactor(): void {
    this.contactor.company = {id: String(this.newCompany.id)}
    this.contactorService.updateContactor({
      body: this.contactor
    }).subscribe({
      error: (err) => console.log(err)
    })
  }

  public addCompany(): void {
    this.companyService.addCompany({
      body: this.company
    }).subscribe({
      next: (res) => {
        this.newCompany = res
        this.updateContactor()
      }, error: (err) => {
        if (err.status === 200) {
          this.companyAdded = true
          this.errMessage = err.error.text
        }
      }
    })
  }

  ngAfterViewInit() {
    this.getContactorByEmail()
  }
}
