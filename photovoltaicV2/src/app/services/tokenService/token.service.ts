import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  set token(token : string){
    localStorage.setItem('token', token);
  }

  get token(){
    return localStorage.getItem('token') as string;
  }

  public decodeToken(token : string){
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/-/g,'/');
    const jsonPayLoad = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayLoad);
  }
}
