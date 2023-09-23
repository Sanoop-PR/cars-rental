import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-wishlists',
  templateUrl: './wishlists.component.html',
  styleUrls: ['./wishlists.component.css']
})
export class WishlistsComponent implements OnInit {

  products:any=[]

  constructor(private api:ApiService,private toaster:ToasterService){}

  ngOnInit(): void {
    this.getAllProducts()
  }

  // get all products
  getAllProducts(){
    this.api.getWishlist().subscribe({
      next:(res:any)=>{
        this.products=res
      },
      error:(err:any)=>{
        this.toaster.showError(err.error)
        console.log(err)
      }
    })
  }

  // remove item from wishlist
  removeItem(id:any){
    this.api.deleteWishlistItem(id).subscribe({
      next:(res:any)=>{
        this.getAllProducts()
        this.toaster.showSuccess(res)
      },
      error:(err:any)=>{
        console.log(err)
        this.toaster.showError(err.error)
      }
    })
  }


}
