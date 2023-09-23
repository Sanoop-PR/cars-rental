import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toaster:ToastrService) { }

  showSuccess(message:any){
    this.toaster.success(message)
  }

  showError(message:any){
    this.toaster.error(message)
  }

  showWarning(message:any){
    this.toaster.warning(message)
  }

}
