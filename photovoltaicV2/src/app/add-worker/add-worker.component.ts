import {AfterViewInit, Component} from '@angular/core';
import {WorkerControllerService} from "../services/services/worker-controller.service";
import {Worker} from "../services/models/worker";
import {AuthenticationService} from "../services/services/authentication.service";
import {TokenService} from "../services/tokenService/token.service";
import {ContactorControllerService} from "../services/services/contactor-controller.service";
import {CustomService} from "../services/services/custom.service";
import {Contactor} from "../services/models/contactor";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements AfterViewInit {


  constructor(private workerService: WorkerControllerService,
              private authService: AuthenticationService,
              private tokenService: TokenService,
              private customService: CustomService,
              private router : Router) {
  }

  roles: string[] = ['SECRETAIRE', 'GESTIONNAIRE', 'TECHNICIEN']
  imageLink: string = "assets/user.jpg"
  errorMessage: string = ""
  decodedToken: any

  worker: Worker = {
    id: 0, email: "", phone: "", generaleInfo: {firstName: "", lastName: "", age: 0, address: ""},
    profession: "", image: "", activities: [], company: {id: ""}, password: ""
  }

  contactor: Contactor = {
    id: 0, email: "", company: {id: ""}, person: {firstName: "", lastName: "", age: 0, address: ""}
  }

  user: any = {
    email: "", password: "", role: "", nom : "", prenom : ""
  }

  public getContactorByEmail(): void {
    this.decodedToken = this.tokenService.decodeToken(this.tokenService.token)
    this.customService.getContactorByEmail(this.decodedToken.sub).subscribe({
      next: (res) => {
        this.contactor = res
      }
    })
  }

  public addWorker(): void {
    this.worker.company = {id: String(this.contactor.company)}
    this.user.email  = this.worker.email
    this.user.password = this.worker.password
    this.user.role = this.worker.profession
    this.user.nom = this.worker.generaleInfo.firstName
    this.user.prenom = this.worker.generaleInfo.lastName
    this.workerService.addWorker({
      body: this.worker
    }).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        if (err.status === 200) {
          this.errorMessage += err.error.text
          this.addUser()
        }
      }
    })
  }

  public addUser(): void {
    this.authService.register({
      body: this.user
    }).subscribe({
      error: (err) => {
        if (err.status === 200) {
          this.errorMessage += err.error.text
        }
      }
    })
  }

  public handleFileInput(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageLink = e.target.result;
      const base64String = reader.result as string;
      this.worker.image = base64String;
    };

    reader.readAsDataURL(file);
  }

  ngAfterViewInit() {
    this.getContactorByEmail()
  }

}
