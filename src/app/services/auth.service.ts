import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //is login
  isLoggedIn(){
    return !!localStorage.getItem("token")
  }

}
