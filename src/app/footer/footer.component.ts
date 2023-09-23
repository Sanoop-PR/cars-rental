import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

    // form group
    messageForm = this.fb.group({
      email:['',[Validators.required]],
      userName:['',[Validators.required]],
      comment:['',[Validators.required]]
    })
  
    constructor(private fb:FormBuilder,private api:ApiService,private toaster:ToasterService){}

    message(){
      if (this.messageForm.valid) {
        let email= this.messageForm.value.email
        let userName= this.messageForm.value.userName
        let comment= this.messageForm.value.comment
        this.api.messageToAdmin(email,userName,comment).subscribe({
          next:(res:any)=>{
            this.toaster.showSuccess(res)
            this.messageForm.reset()
          },
          error:(err:any)=>{
            this.toaster.showError(err.error)
            console.log(err)
          }
        })
      } else {
        console.log('invalid')
      }
    }

}
