import {Component} from '@angular/core';
import {ContactorRequestControllerService} from "../services/services/contactor-request-controller.service";
import {ContactorRequest} from "../services/models/contactor-request";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private contactorRequestService: ContactorRequestControllerService) {}

  contactorRequest: ContactorRequest = {
    id: 0, firstName: "", lastName: "", email: "", phone: "", companyAddress: "", companyName: "", message: ""
  }
  errorMessage : string = "";
  sendInvalid : boolean = false;
  sendValid : boolean = false;
  errorRequest: boolean = false;
  public addContactorRequest(): void {
    this.contactorRequestService.addContactorRequest({
      body : this.contactorRequest
    }).subscribe({
      next:(res)=>{
        if(res){
          this.errorMessage = "votre demande a été envoyer avec succée";
          this.sendValid = true
        }
      },error:(err)=>{
        this.sendInvalid = true;
        this.errorMessage = "erreur survenu veiller nous contacter"
      }
    })
  }
}
