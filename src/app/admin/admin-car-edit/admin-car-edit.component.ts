import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-admin-car-edit',
  templateUrl: './admin-car-edit.component.html',
  styleUrls: ['./admin-car-edit.component.css']
})
export class AdminCarEditComponent {
  products:any={}
  productId:number=0
  constructor(private api:ApiService,private viewRoute:ActivatedRoute,private toaster:ToasterService,private router:Router){}

  ngOnInit(): void {
    this.viewRoute.params.subscribe({
      next:(result:any)=>{
        const {id} = result
       console.log(id)
        this.api.viewProduct(id).subscribe({
          next:(res:any)=>{
            console.log(res)
            this.products=res
            this.productId=res.v_id
          },
          error:(err:any)=>{
            console.log(err)
            this.toaster.showError(err.error)
          }
        })
      }
    })
  }

  editProduct(products:any){
    console.log(this.productId)
    console.log(products)
    this.api.updateCarDetailsByAdmin(this.productId,products).subscribe({
      next:(res:any)=>{
        this.toaster.showSuccess(res)
        console.log(res)
        this.router.navigateByUrl('/admin_dashboard')
      },
      error:(err:any)=>{
        console.log(err)
        this.toaster.showError(err.error)
      }
    })
  }

}
