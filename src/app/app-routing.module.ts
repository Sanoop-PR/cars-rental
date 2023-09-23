import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { DashboardComponent } from './products/dashboard/dashboard.component';
import { WishlistsComponent } from './products/wishlists/wishlists.component';
import { ViewproductComponent } from './products/viewproduct/viewproduct.component';
import { CartComponent } from './products/cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { InvoiceComponent } from './products/invoice/invoice.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminCarComponent } from './admin/admin-car/admin-car.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminCarAddComponent } from './admin/admin-car-add/admin-car-add.component';
import { AdminCarEditComponent } from './admin/admin-car-edit/admin-car-edit.component';
import { AdminViewCarComponent } from './admin/admin-view-car/admin-view-car.component';
import { AdminMessagesComponent } from './admin/admin-messages/admin-messages.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'wishlist',component:WishlistsComponent,canActivate:[AuthGuard]},
  {path:'view-product/:id',component:ViewproductComponent, canActivate:[AuthGuard]},
  {path:'cart-product/:id',component:CartComponent,canActivate:[AuthGuard]},
  {path:'cart-product/invoice',component:InvoiceComponent,canActivate:[AuthGuard]},
  {path:'admin_login',component:AdminLoginComponent},
  {path:'admin_dashboard',component:AdminDashboardComponent},
  {path:'admin_car',component:AdminCarComponent},
  {path:'admin_user',component:AdminUserComponent},
  {path:'admin_car_add',component:AdminCarAddComponent},
  {path:'admin_car_edit/:id',component:AdminCarEditComponent},
  {path:'admin_view_car/:id',component:AdminViewCarComponent},
  {path:'admin_message',component:AdminMessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
