import {AfterViewInit, Component} from '@angular/core';
import {TokenService} from "../services/tokenService/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit{

  constructor(private tokenService: TokenService) {
  }

  decodedToken : any;
  tech : boolean = false;
  ges : boolean = false;
  sec : boolean = false;
  ent : boolean = false;
  admin : boolean = false;
  token : string = localStorage.getItem('token') as string
  ngAfterViewInit() {
    this.decodedToken = this.tokenService.decodeToken(this.token)
    switch (this.decodedToken.authorities[0]){
      case 'TECHNICIEN':{
        this.tech = true
        break;
      }
      case 'GESTIONNAIRE':{
        this.ges = true
        break;
      }
      case 'SECRETAIRE':{
        this.sec = true
        break;
      }
      case 'ENTREPRENEUR':{
        this.ent = true
        break;
      }
      case 'ADMIN':{
        this.admin = true
        break;
      }
    }
  }
}
