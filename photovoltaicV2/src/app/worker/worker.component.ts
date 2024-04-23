import {AfterViewInit, Component} from '@angular/core';
import {Worker} from "../services/models/worker";
import {WorkerControllerService} from "../services/services/worker-controller.service";
import {ContactorControllerService} from "../services/services/contactor-controller.service";
import {TokenService} from "../services/tokenService/token.service";
import {CustomService} from "../services/services/custom.service";
import {Contactor} from "../services/models/contactor";

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements AfterViewInit {
  constructor(private workerService: WorkerControllerService,
              private customService: CustomService,
              private tokenService: TokenService) {
  }

  errorMessage: string = ""
  worker: Worker = {
    id: 0,
    email: "",
    generaleInfo: {firstName: "", lastName: "", age: 0, address: ""},
    profession: "",
    image: "",
    phone: "",
    activities: [],
    company: {id: ""},
    password: ""
  }
  workerList: Array<Worker> = []
  decodedToken: any
  companyId: any
  contactor: Contactor = {
    id: 0, email: "", person: {firstName: "", lastName: "", age: 0, address: ""}, company: {id: ""}
  }

  user: any = {
    nom: "", prenom: "", email: "", password : "", enabled : false
  }

  public getContactorByEmail(): void {
    this.decodedToken = this.tokenService.decodeToken(this.tokenService.token)
    this.customService.getContactorByEmail(this.decodedToken.sub).subscribe({
      next: (res) => {
        this.contactor = res
        this.companyId = this.contactor.company
        this.getWorkersByCompanyId()
      }
    })
  }

  public getWorkerAccountByEmail(email : string):void{
    this.customService.getContactorAccount(email).subscribe({
      next:(res)=>{
        this.user = res
        console.log(res)
      },error:(err)=>{
        if (err.status === 200){
          this.errorMessage = err.error.text
        }
      }
    })
  }

  public getWorkersByCompanyId(): void {
    this.workerService.getWorkersByCompany({
      id: this.companyId
    }).subscribe({
      next: (res) => {
        this.workerList = res
      }
    })
  }

  public selectWorker(worker: Worker) {
    this.worker = worker;
    this.getWorkerAccountByEmail(worker.email)
  }

  public getImageUrl(base64String: string | null): string {
    return base64String ? `${base64String}` : ''; // Handle missing image
  }

  public deleteWorkerById(): void {
    this.workerService.deleteWorker({
      id: this.worker.id
    }).subscribe({
      error: (err) => {
        if (err.status === 200) {
          this.errorMessage = err.error.text
        }
      }
    })
    location.reload()
  }

  public disableAccountWorker():void{
    this.customService.disableAccountWorkerByAdmin(this.worker).subscribe({
      error:(err)=>{
        if (err.status === 200) {
          this.errorMessage += '/' + err.error.text
        }
      },
      next:(res)=>console.log(res)
    })
  }

  public activateAccountWorker():void{
    this.customService.activateAccountWorkerByAdmin(this.worker).subscribe({
      error:(err)=>{
        if (err.status === 200) {
          this.errorMessage += '/' + err.error.text
        }
      }
    })
  }

  public updateWorkerById(): void {
    let id: any = this.worker.company
    this.worker.company = {id: String(id)}
    this.workerService.updateWorker({
      body: this.worker
    }).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error: (err) => {
        if (err.status === 200) {
          this.errorMessage = ''
          this.errorMessage += ' ' + err.error.text
          if(!this.user.enabled){
            this.disableAccountWorker()
          }else{
            this.activateAccountWorker()
          }
        }
      }
    })
  }

  ngAfterViewInit() {
    this.getContactorByEmail()
  }
}
