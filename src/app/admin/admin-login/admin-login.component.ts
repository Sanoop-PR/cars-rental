import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  
  constructor(private fb:FormBuilder,private toaster:ToasterService,private api:ApiService,private router:Router){}

  loginForm = this.fb.group({
    username : ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    password : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  login(){
    if (this.loginForm.valid) {
      // form valid
      let username = this.loginForm.value.username
      let password = this.loginForm.value.password

      this.api.adminLogin(username,password).subscribe({
        next:(res:any)=>{
          const {preUser,token}=res
          // store token in local storage
          localStorage.setItem("token",token) 
          setTimeout(() => {
            this.toaster.showSuccess('Login Success')
            this.router.navigateByUrl('admin_dashboard')            
          }, 2000);
        },
        error:(err:any)=>{
          console.log(err)
          this.toaster.showError(err.error)
        }
      })
    } else {
      this.toaster.showWarning('Invalid Form')
    }
  }


}
