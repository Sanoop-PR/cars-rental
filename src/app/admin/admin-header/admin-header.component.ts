import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  
  constructor(private router:Router){}

  //log out 
  logout(){
    // remove login data from local storage
    localStorage.removeItem("token")
    setTimeout(() => {
      // redirect to landing page
      this.router.navigateByUrl('/login')
    }, 2000);
  }
}
