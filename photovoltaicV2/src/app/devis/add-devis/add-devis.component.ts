import {AfterViewInit, Component} from '@angular/core';
import {SharedDataService} from "../../services/sharedDataService/shared-data.service";
import {DevisRequest} from "../../services/models/devis-request";
import {Devis} from "../../services/models/devis";
import {SolarPanelControllerService} from "../../services/services/solar-panel-controller.service";
import {TokenService} from "../../services/tokenService/token.service";
import {WorkerControllerService} from "../../services/services/worker-controller.service";
import {CustomService} from "../../services/services/custom.service";
import {Worker} from "../../services/models/worker";
import {MeterControllerService} from "../../services/services/meter-controller.service";
import {InverterControllerService} from "../../services/services/inverter-controller.service";
import {CableControllerService} from "../../services/services/cable-controller.service";
import {BatteryControllerService} from "../../services/services/battery-controller.service";
import {SystemFixingControllerService} from "../../services/services/system-fixing-controller.service";
import {DevisRequestControllerService} from "../../services/services/devis-request-controller.service";
import {DevisControllerService} from "../../services/services/devis-controller.service";
import {SolarPanel} from "../../services/models/solar-panel";

@Component({
  selector: 'app-add-devis',
  templateUrl: './add-devis.component.html',
  styleUrls: ['./add-devis.component.css']
})
export class AddDevisComponent implements AfterViewInit {

  constructor(private sharedDataService: SharedDataService,
              private tokenService: TokenService,
              private customService: CustomService,
              private solarPanelService: SolarPanelControllerService,
              private inverterService: InverterControllerService,
              private cableService: CableControllerService,
              private meterService: MeterControllerService,
              private batteryService: BatteryControllerService,
              private systemFixingService: SystemFixingControllerService,
              private devisService: DevisControllerService) {
  }

  errorMessage : string = ""
  devisRequest: DevisRequest = {
    id: 0,
    company: {id: ""},
    location: "",
    potential_customer: {firstName: "", lastName: "", phone: "", email: ""},
    consumption: 0,
    electricity_access: false,
    post_code: "",
    roof_type: "",
    building_type: "",
    available_area: 0,
    status: ""
  }

  SolarPanelList: any[] = []
  SystemFixingList: any[] = []
  InverterList: any[] = []
  MeterList: any[] = []
  CableList: any[] = []
  BatteryList: any[] = []
  Tva: any = [0, 5, 10, 15]


  devis: Devis = {
    id: 0, date: "", etat: "", ref: "", status: "",
    company: {id: ""},
    battery: {modelBattery: "", priceBattery: 0, quantityBattery: 0, totalBattery: 0, tvaBattery: 0},
    cable: {modelCable: "", priceCable: 0, quantityCable: 0, totalCable: 0, tvaCable: 0},
    meter: {modelMeter: "", priceMeter: 0, quantityMeter: 0, totalMeter: 0, tvaMeter: 0},
    inverter: {modelInverter: "", priceInverter: 0, quantityInverter: 0, totalInverter: 0, tvaInverter: 0},
    solarPanel: {modelSolarPanel: "", priceSolarPanel: 0, quantitySolarPanel: 0, totalSolarPanel: 0, tvaSolarPanel: 0},
    systemFixing: {
      modelSystemFixing: "",
      priceSystemFixing: 0,
      quantitySystemFixing: 0,
      totalSystemFixing: 0,
      tvaSystemFixing: 0
    },
    total: 0
  }

  solarPanel: SolarPanel = {
    id: 0, company: {id: ""}, quantity: 0, type_cell: "", image: "", weight: 0, maximum_current: 0, maximum_voltage: 0,
    model: "", nominal_power: 0, width: 0,price : 0,height : 0
  }

  worker: Worker = {
    id: 0, email: "", company: {id: ""}, profession: "", password: "", image: "",
    generaleInfo: {firstName: "", lastName: "", age: 0, address: ""},
    phone: "",
    activities: []
  }

  public getGestionnnaireByEmail(): void {
    let decodedToken = this.tokenService.decodeToken(this.tokenService.token)
    this.customService.getWorkerByEmail(decodedToken.sub).subscribe({
      next: (res) => {
        this.worker = res
        this.getSolarPanelList();
        this.getCableList();
        this.getMeterList();
        this.getInverterList();
        this.getSystemFixingList();
        this.getBatteryList();
      }
    })
  }

  public getSolarPanelList(): void {
    let companyId: any = this.worker.company
    this.solarPanelService.getSolarPanelsByCompany({
      id: companyId
    }).subscribe(
      res => {
        this.SolarPanelList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public getMeterList(): void {
    let companyId: any = this.worker.company
    this.meterService.getMetersByCompany({
      id: companyId
    }).subscribe(
      res => {
        this.MeterList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public getInverterList(): void {
    let companyId: any = this.worker.company
    this.inverterService.getInvertersByCompany({
      id: companyId
    }).subscribe(
      res => {
        this.InverterList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public getCableList(): void {
    let companyId: any = this.worker.company
    this.cableService.getCablesByCompany({
      id: companyId
    }).subscribe(
      res => {
        this.CableList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public getSystemFixingList(): void {
    let companyId: any = this.worker.company
    this.systemFixingService.getSystemFixingsByCompany({
      id: companyId
    }).subscribe(
      res => {
        this.SystemFixingList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public getBatteryList(): void {
    let companyId: any = this.worker.company
    this.batteryService.getBatteriesByCompanyId({
      id: companyId
    }).subscribe(
      res => {
        this.BatteryList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public selectSolarPanel(event: any): void {
    let id = event.target.value
    this.customService.getSolarPanelById(id).subscribe({
      next: (res) => {
        this.solarPanel = res
        this.devis.solarPanel.priceSolarPanel = this.solarPanel.price
      }
    })
  }

  public selectInverterPrice(event: any): void {
    this.devis.inverter.priceInverter = event.target.value;
  }

  public selectMeterPrice(event: any): void {
    this.devis.meter.priceMeter = event.target.value;
  }

  public selectCablePrice(event: any): void {
    this.devis.cable.priceCable = event.target.value;
  }

  public selectBatteryPrice(event: any): void {
    this.devis.battery.priceBattery = event.target.value;
  }

  public selectSystemFixingPrice(event: any): void {
    this.devis.systemFixing.priceSystemFixing = event.target.value;
  }


  public calculateTotalDevisSolarPanel(): void {
    const nb: any = this.devis.solarPanel.quantitySolarPanel
    const price: any = this.devis.solarPanel.priceSolarPanel
    const tva: any = this.devis.solarPanel.tvaSolarPanel
    this.devis.solarPanel.totalSolarPanel = ((nb * price) + ((nb * price) * tva) / 100);
    if(this.solarPanel.quantity < this.devis.solarPanel.quantitySolarPanel){
      this.errorMessage = "Stock panneau solaire insuffisante!";
      console.log(this.errorMessage)
    }
  }

  public calculateTotalDevisInverter(): void {
    const nb: any = this.devis.inverter.quantityInverter
    const price: any = this.devis.inverter.priceInverter
    const tva: any = this.devis.inverter.tvaInverter
    this.devis.inverter.totalInverter = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateTotalDevisSystemFixing(): void {
    const nb: any = this.devis.systemFixing.quantitySystemFixing
    const price: any = this.devis.systemFixing.priceSystemFixing
    const tva: any = this.devis.systemFixing.tvaSystemFixing
    this.devis.systemFixing.totalSystemFixing = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateTotalDevisCable(): void {
    const nb: any = this.devis.cable.quantityCable
    const price: any = this.devis.cable.priceCable
    const tva: any = this.devis.cable.tvaCable
    this.devis.cable.totalCable = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateTotalDevisBattery(): void {
    const nb: any = this.devis.battery.quantityBattery
    const price: any = this.devis.battery.priceBattery
    const tva: any = this.devis.battery.tvaBattery
    this.devis.battery.totalBattery = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateTotalDevisMeter(): void {
    const nb: any = this.devis.meter.quantityMeter
    const price: any = this.devis.meter.priceMeter
    const tva: any = this.devis.meter.tvaMeter
    this.devis.meter.totalMeter = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateDevisTotal(): void {
    this.devis.total = this.devis.meter.totalMeter +
      this.devis.battery.totalBattery +
      this.devis.inverter.totalInverter +
      this.devis.cable.totalCable +
      this.devis.solarPanel.totalSolarPanel +
      this.devis.systemFixing.totalSystemFixing
  }

  public generateNewReference(): string {
    var ref = "ref_"
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    const sum = x + y - 1;
    return ref + Math.floor(sum);
  }

  public generateDate(): string {
    const date = new Date();
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  public addDevis(): void {
    this.devis.company = {id: String(this.worker.company)}
    this.devis.date = this.generateDate()
    this.devis.ref = this.generateNewReference()
    this.devis.status = "à envoier"
    console.log(this.devis)
    this.devisService.addDevis({
      body: this.devis
    }).subscribe({
        error: (err) => {
          console.log(err)
        }
      }
    )
  }


  ngAfterViewInit() {
    this.devisRequest = this.sharedDataService.devisRequest;
    this.getGestionnnaireByEmail()
  }
}
