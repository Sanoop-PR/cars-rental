import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {DialogBodyComponent} from '../dialog-body/dialog-body.component'
import {MatDialog} from '@angular/material/dialog';
import { ToasterService } from 'src/app/services/toaster.service';

export interface DialogData {
  registerForm:any
  carPrice:any
  products:any
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any={}
  carPrice:any

  constructor(private rentRoute:ActivatedRoute,private api:ApiService,private fb:FormBuilder,private matDialog:MatDialog,private toaster:ToasterService){}

  registerForm = this.fb.group({
    mobile:['',[Validators.required,Validators.pattern('[0-9]*')]],
    firstName:['',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z ]*')]],
    lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required]],
    PickDate:['',[Validators.required]],
    returnDate:['',[Validators.required]],
    PickTime:['',[Validators.required]],
    returnTime:['',[Validators.required]]
  })

  ngOnInit(): void {
    this.rentRoute.params.subscribe({
      next:(result:any)=>{
        const {id} = result
        this.api.cartView(id).subscribe({
          next:(res:any)=>{
            this.products=res
            this.carPrice=res.pricing_info.price
            // console.log(res)

          },
          error:(err:any)=>{
            console.log(err)
          }
        })
      }
    })
  }

  register(){
    if(this.registerForm.valid){
      let firstName = this.registerForm.value.firstName
      let mobile = this.registerForm.value.mobile
      let lastName = this.registerForm.value.lastName
      let email = this.registerForm.value.email
      let PickDate = this.registerForm.value.PickDate
      let returnDate = this.registerForm.value.returnDate
    }
  }

  openDialog(){
    if (this.registerForm.valid) {
      const dialogRef = this.matDialog.open(DialogBodyComponent,{
        data:{registerForm:this.registerForm.value,
          carPrice:this.products.pricing_info.price,
          products:this.products
        }
      })
      this.registerForm.reset()
    } else {
      this.toaster.showWarning('Invalid Form')
    }
  }

  cancelFormBtn(){
    this.registerForm.reset()
  }

}

