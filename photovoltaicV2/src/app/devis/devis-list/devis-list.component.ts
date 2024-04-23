import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TokenService} from "../../services/tokenService/token.service";
import {DevisControllerService} from "../../services/services/devis-controller.service";
import {CustomService} from "../../services/services/custom.service";
import {Worker} from "../../services/models/worker";
import {Devis} from "../../services/models/devis";
import {MatTableDataSource} from "@angular/material/table";
import {DevisRequest} from "../../services/models/devis-request";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-devis-list',
  templateUrl: './devis-list.component.html',
  styleUrls: ['./devis-list.component.css']
})
export class DevisListComponent implements AfterViewInit {
  constructor(private tokenService: TokenService,
              private devisService: DevisControllerService,
              private customService: CustomService) {
  }

  dataExist: boolean = false
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
  devisList: Array<Devis> = []
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
        this.getDevisListByCompanyId()
      }
    })
  }

  errorMessage: string = ""
  displayedColumns: string[] = ['reference', 'date', 'status', 'total', 'action'];
  dataSource = new MatTableDataSource<Devis>(this.devisList);
  posts: any
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

  public getDevisListByCompanyId(): void {
    let companyId: any = this.worker.company
    this.devisService.getDevisByCompany({
      id: companyId
    }).subscribe({
      next: (res) => {
        this.posts = res
        this.dataSource = new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (res.length > 0) {
          this.dataExist = true
        }
      }
    })
  }

  public selectDevis(devis : Devis):void{
    this.devis = devis
  }

  applyFilter() {
    const filterValue = (event?.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  ngAfterViewInit() {
    this.getGestionnnaireByEmail()
  }
}
