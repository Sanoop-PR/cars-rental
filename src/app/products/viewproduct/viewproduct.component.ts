import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  products:any={}

  constructor(private api:ApiService,private viewRoute:ActivatedRoute,private toaster:ToasterService){}

  ngOnInit(): void {
    this.viewRoute.params.subscribe({
      next:(result:any)=>{
        const {id} = result
       console.log(id)
        this.api.viewProduct(id).subscribe({
          next:(res:any)=>{
            console.log(res)
            this.products=res
          },
          error:(err:any)=>{
            console.log(err)
            this.toaster.showError(err.error)
          }
        })
      }
    })
  }

   // add to wishlist
   wishlists(product:any){
    this.api.addToWishlist(product).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toaster.showSuccess(res)
        // this.router.navigateByUrl('wishlist')
      },
      error:(err:any)=>{
        console.log(err)
        this.toaster.showError(err.error)
      }
    })
  }


}

