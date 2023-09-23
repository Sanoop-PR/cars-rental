import { Injectable } from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToasterService } from '../services/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private auth:AuthService,private toaster:ToasterService,private router:Router){}

  canActivate:CanActivateFn=()=>{

    if (this.auth.isLoggedIn()) {
      return true
    } else {
      // alert
      this.toaster.showWarning("Access Denied!! please login...")
      // redirect to landing page
      this.router.navigateByUrl('login')
      return false
    }
  }
  
  
}
