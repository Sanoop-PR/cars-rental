import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {

  comments:any=[]

  constructor(private api:ApiService,private toaster:ToasterService){}

  ngOnInit(): void {
    this.api.getMessage().subscribe({
      next:(res:any)=>{
        this.comments=res.comments
        // console.log(res)
      },
      error:(err:any)=>{
        this.toaster.showError(err.error)
        console.log(err)
      }
    })
  }



}
