import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './products/dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import { WishlistsComponent } from './products/wishlists/wishlists.component';
import { ViewproductComponent } from './products/viewproduct/viewproduct.component';
import { CartComponent } from './products/cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBodyComponent } from './products/dialog-body/dialog-body.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { InvoiceComponent } from './products/invoice/invoice.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminCarComponent } from './admin/admin-car/admin-car.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import {MatTableModule} from '@angular/material/table';
import { AdminCarAddComponent } from './admin/admin-car-add/admin-car-add.component';
import {MatSelectModule} from '@angular/material/select';
import { AdminCarEditComponent } from './admin/admin-car-edit/admin-car-edit.component';
import { AdminViewCarComponent } from './admin/admin-view-car/admin-view-car.component';
import { AdminMessagesComponent } from './admin/admin-messages/admin-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    WishlistsComponent,
    ViewproductComponent,
    CartComponent,
    DialogBodyComponent,
    InvoiceComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminCarComponent,
    AdminUserComponent,
    AdminHeaderComponent,
    AdminCarAddComponent,
    AdminCarEditComponent,
    AdminViewCarComponent,
    AdminMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    MatBadgeModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    NgxPayPalModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
