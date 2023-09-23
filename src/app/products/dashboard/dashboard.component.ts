import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService,private router:Router,private toaster:ToasterService){}
  allProducts:any=[]


  ngOnInit(): void {
    this.api.getAllProducts().subscribe({
      next:(res:any)=>{
        // console.log(res)
        this.allProducts=res
      },
      error:(err:any)=>{
        console.log(err)
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