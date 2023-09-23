import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-admin-car-add',
  templateUrl: './admin-car-add.component.html',
  styleUrls: ['./admin-car-add.component.css']
})
export class AdminCarAddComponent {
  
  selectedGroup:string=''
  selectedTransmission:string=''

    // form group
    AddCarDetails = this.fb.group({
      carName:['',[Validators.required]],
      carId:['',[Validators.required]],
      accessibility:['',[Validators.required]],
      seats:['',[Validators.required]],
      image:['',[Validators.required]],
      mileage:['',[Validators.required]],
      suitcaseBig:['',[Validators.required]],
      suitcaseSmall:['',[Validators.required]],
      group:['',[Validators.required]],
      door:['',[Validators.required]],
      price:['',[Validators.required]]
    })

  constructor(private fb:FormBuilder,private api:ApiService,private toaster:ToasterService,private route:Router){}

  carDetailsForm(){
    if(this.AddCarDetails.valid){
      let carName = this.AddCarDetails.value.carName
      let carId = this.AddCarDetails.value.carId
      let accessibility = this.selectedTransmission
      let seats = this.AddCarDetails.value.seats
      let image = this.AddCarDetails.value.image
      let mileage = this.AddCarDetails.value.mileage
      let suitcaseBig = this.AddCarDetails.value.suitcaseBig
      let suitcaseSmall = this.AddCarDetails.value.suitcaseSmall
      let group = this.selectedGroup
      let door = this.AddCarDetails.value.door
      let price = this.AddCarDetails.value.price

      const body = {carName,carId,accessibility,seats,image,mileage,suitcaseBig,suitcaseSmall,group,door,price}

      this.api.addCarDetailsByAdmin(body).subscribe({
        next:(res:any)=>{
          console.log(res)
          this.AddCarDetails.reset()
          this.route.navigateByUrl('/admin_dashboard')
          this.toaster.showSuccess('new product added')
        },
        error:(err:any)=>{
          this.toaster.showError(err.error)
          console.log(err)
        }
      })

    }
    else{
      console.log('valid input please')
    }
  }

}
