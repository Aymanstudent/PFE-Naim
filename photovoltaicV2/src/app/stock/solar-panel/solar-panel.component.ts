import {AfterViewInit, Component} from '@angular/core';
import {CustomService} from "../../services/services/custom.service";
import {SolarPanelControllerService} from "../../services/services/solar-panel-controller.service";
import {TokenService} from "../../services/tokenService/token.service";
import {SolarPanel} from "../../services/models/solar-panel";
import {Worker} from "../../services/models/worker";

@Component({
  selector: 'app-solar-panel',
  templateUrl: './solar-panel.component.html',
  styleUrls: ['./solar-panel.component.css']
})
export class SolarPanelComponent implements AfterViewInit{
  constructor(private customService: CustomService,
              private solarPanelService: SolarPanelControllerService,
              private tokenService: TokenService) {
  }

  solarPanel: SolarPanel = {
    id: 0, company: {id: ""}, quantity: 0, type_cell: "", image: "", weight: 0, maximum_current: 0, maximum_voltage: 0,
    model: "", nominal_power: 0, width: 0,price : 0,height : 0
  }
  worker : Worker = {
    id : 0,email : "",company :{id : ""},profession : "",password :"",image : "",
    generaleInfo : {firstName : "",lastName : "",age : 0,address :""},
    phone : "",
    activities : []
  }
  maxStock : number = 400
  solarPanelList : Array<SolarPanel> = []
  quantity : number = 0

  public getSecretaireByEmail():void{
    let decodedToken = this.tokenService.decodeToken(this.tokenService.token)
    this.customService.getWorkerByEmail(decodedToken.sub).subscribe({
      next:(res)=>{
        this.worker = res
        this.getSolarPanelListByCompanyId()
      }
    })
  }

  public addSolarPanel():void{
    this.solarPanel.company = {id : String(this.worker.company)}
    this.solarPanelService.addSolarPanel({
      body : this.solarPanel
    }).subscribe({
      error:(err)=>{
        console.log(err)}
    })
  }

  public getSolarPanelListByCompanyId():void{
    let idCompany : any = this.worker.company
    this.solarPanelService.getSolarPanelsByCompany({
      id : idCompany
    }).subscribe({
      error:(err)=>{
        console.log(err)
      },next:(res)=>{
        this.solarPanelList = res
      }
    })
  }
  public selectSolarPanel(solarPanel: SolarPanel): void {
    this.solarPanel = solarPanel;
  }

  public calculateStock(): number{
    var stock : any = 0
    for (let i = 0; i < this.solarPanelList.length; i++){
      stock += this.solarPanelList[i].quantity
    }
    return (stock * 100) / this.maxStock;
  }

  public clearSolarPanel():void {
    this.solarPanel = {
      id: 0,
      height: 0,
      image: "",
      maximum_current: 0,
      maximum_voltage: 0,
      model: "",
      nominal_power: 0,
      price: 0,
      quantity: 0,
      type_cell: "",
      weight: 0,
      width: 0,
      company: {id: ""}
    }
  }

  public updateSolarPanel(): void {
    this.solarPanel.company = {id : String(this.worker.company)}
    this.solarPanelService.updateSolarPanel({
      body: this.solarPanel
    })
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err)
      })
  }

  public deleteSolarPanelById(id :any){
    this.solarPanelService.deleteSolarPanelById({
      id : id
    }).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
    })
  }

  public addQuantity(solarPanel : SolarPanel): void {
    this.solarPanel = solarPanel
    this.solarPanel.quantity += this.quantity
    this.updateSolarPanel()
  }

  public getImageUrl(base64String: string | undefined): string {
    return base64String ? `${base64String}` : ''; // Handle missing image
  }

  public onKey(event: any): void {
    this.quantity = parseInt(event.target.value);
  }

  public onFileChange(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.solarPanel.image = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  ngAfterViewInit() {
    this.getSecretaireByEmail()
  }
}
