import { Component } from '@angular/core';
import {FormBuilder, FormControl,FormGroupDirective,NgForm,Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // form group
  registerForm = this.fb.group({
    mobile:['',[Validators.required,Validators.pattern('[0-9]*')]],
    userName:['',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z ]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router,private toaster:ToasterService){}

  register(){
    if(this.registerForm.valid){

      let username = this.registerForm.value.userName
      let mobile = this.registerForm.value.mobile
      let password = this.registerForm.value.password

      // alert('register clicked')
      this.api.registration(username,password,mobile).subscribe({
        next:(response:any)=>{
          console.log(response)
          this.toaster.showSuccess(`${response.username} successfully registered`)

          setTimeout(() => {
            // navigate to login page
            this.router.navigateByUrl('login')
          }, 2000);
        },
        error:(err:any)=>{
          console.log(err)
          this.toaster.showError(err.error)
        }
      })
    }else{
      console.log('invalid form')
      this.toaster.showWarning('invalid form')
    }
  }

}
