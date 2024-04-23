import {AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/services/authentication.service";
import {AuthenticationRequest} from "../services/models/authentication-request";
import {TokenService} from "../services/tokenService/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  constructor(private router: Router,
              private authService: AuthenticationService,
              private tokenService: TokenService) {
  }

  gestionnaireConnected: boolean = false
  adminConnected: boolean = false
  entrepreneurConnected: boolean = false
  secretaireConnected: boolean = false
  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  public login(): void {
    this.errorMsg = []
    this.authService.authenticate(
      {
        body: this.authRequest
      }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        let admin = this.tokenService.decodeToken(localStorage.getItem('token') as string)
        let authorities: string[] = admin.authorities
        if (authorities[0] === 'ADMIN') {
          this.adminConnected = true
          this.welcomeUser()
          setTimeout(() => {
            this.router.navigate(['photovoltaic/contactorRequest'])
          }, 2100);
        } else if (authorities[0] === 'ENTREPRENEUR') {
          this.entrepreneurConnected = true
          this.welcomeUser()
          setTimeout(() => {
            this.router.navigate(['photovoltaic/entrepreneur/welcome'])
          }, 2100);
        } else if (authorities[0] === 'SECRETAIRE') {
          this.secretaireConnected = true
          this.welcomeUser()
          setTimeout(() => {
            this.router.navigate(['photovoltaic/devisRequest'])
          }, 2100);
        }else if (authorities[0] === 'GESTIONNAIRE') {
          this.gestionnaireConnected = true
          this.welcomeUser()
          setTimeout(() => {
            this.router.navigate(['photovoltaic/gestionnaire/devisRequest'])
          }, 2100);
        }
      },
      error: (err) => {
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors
        } else {
          this.errorMsg.push(err.error.error)
        }
      }
    })
  }

  public welcomeUser(): void {
    function typeWriter(element: HTMLSpanElement, text: string, speed: number = 75) {
      element.textContent = ''
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
    }

    const spanElement = document.getElementById('text') as HTMLSpanElement;
    let textToType = '👋Bienvenu';
    if (this.adminConnected) {
      textToType += ' Admin'
    } else if (this.entrepreneurConnected) {
      textToType += ' Entrepreneur'
    } else if (this.secretaireConnected) {
      textToType += ' Secretaire'
    } else if (this.gestionnaireConnected) {
      textToType += ' Gestionnaire'
    }

    typeWriter(spanElement, textToType);
    const divElement = document.getElementById('welcome') as HTMLDivElement;

    function showAndHideDiv() {
      divElement.style.display = 'flex';
      setTimeout(() => {
        divElement.style.display = 'none';
      }, 2200);
    }

    showAndHideDiv()
  }

  ngAfterViewInit() {
  }
}
