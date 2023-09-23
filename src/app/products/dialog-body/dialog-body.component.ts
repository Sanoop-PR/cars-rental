import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../cart/cart.component';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ToasterService } from 'src/app/services/toaster.service';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css'],
})
export class DialogBodyComponent implements OnInit {
  paymentSection: boolean = false;
  proceedBtnClick: boolean = true;
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean = false;
  showCancel: boolean = false;
  showError: boolean = false;
  carAmount: any;
  intervelDate:number=0
  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public datas: DialogData,
    private toaster: ToasterService,private api:ApiService
  ) {}
  ngOnInit(): void {
    let returnFullDate = new Date(this.datas.registerForm.returnDate)
    let pickFullDate = new Date(this.datas.registerForm.PickDate)
    let returnDate = returnFullDate.getDate()
    let PickDate = pickFullDate.getDate()
    console.log(returnDate,PickDate)
    console.log(returnDate-PickDate)
    this.intervelDate = returnDate-PickDate
    this.carAmount = this.datas.carPrice*this.intervelDate
    console.log(this.carAmount)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  proceed() {
    this.paymentSection = true;
    this.proceedBtnClick = false;
    this.initConfig();
  }

  private initConfig(): void {
    let amount = this.carAmount.toString();

    this.payPalConfig = {
      currency: 'USD',
      clientId: 'sb',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: amount,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: amount,
                  },
                },
              },
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        // console.log(
        //   'onClientAuthorization - you should probably inform your server about completed transaction at this point',
        //   data
        // );
        this.showSuccess = true;
        this.toaster.showSuccess('Payment Success');
        this.api.addToCart(this.datas).subscribe({
          next:(res:any)=>{
            console.log("cart added")
            console.log(res)
          },
          error:(err:any)=>{
            console.log(err)
          }
        })
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        // this.showCancel = true;
        this.dialogRef.close();
        this.toaster.showWarning('Payment Cancel');
      },
      onError: (err) => {
        // console.log('OnError', err);
        this.showError = true;
        this.toaster.showError('Error');
      },
      onClick: (data, actions) => {
        // console.log('onClick', data, actions);
        // this.resetStatus();
      },
    };
  }
}
