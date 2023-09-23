import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router){}

    //log out 
    logout(){
      // remove login data from local storage
      localStorage.removeItem("token")
      setTimeout(() => {
        // redirect to landing page
        this.router.navigateByUrl('login')
      }, 2000);
    }

}
