import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit{
 
  allUser:any=[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getUsersToAdmin().subscribe({
      next:(res:any)=>{
        this.allUser=res
        // console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  displayedColumns: string[] = ['position', 'name', 'Mobile', 'Cart','Buttons'];


  deleteUser(mobile:any){
    this.api.adminDeleteUser(mobile).subscribe({
      next:(res:any)=>{
        this.allUser=res
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

}
