import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-car',
  templateUrl: './admin-car.component.html',
  styleUrls: ['./admin-car.component.css']
})
export class AdminCarComponent implements OnInit {

  allProducts:any=[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllProducts().subscribe({
      next:(res:any)=>{
        this.allProducts=res
        // console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  deleteProduct(id:any){
    this.api.deleteProductByAdmin(id).subscribe({
      next:(res:any)=>{
        this.allProducts=res
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

}
