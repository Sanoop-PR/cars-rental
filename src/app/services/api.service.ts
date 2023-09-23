import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers :new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  base_url='https://car-rental-backend-ealq.onrender.com'

  // registration

  registration(username:any,password:any,mobile:any){
    const body = {
      username,
      password,
      mobile
    }
    // to call register api
    return this.http.post(`${this.base_url}/register`,body)
  }

  // login
  login(username:any,password:any){
    const body = {username,password}
    return this.http.post(`${this.base_url}/login`,body)
  }

  // adding header to http req
  appendToken(){
    const token = localStorage.getItem("token")
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append("access-token",token)
      options.headers = headers
    }
    return options
  }

  getAllProducts(){
    return this.http.get(`${this.base_url}/cars/all-cars`)
  }

  // view product
  viewProduct(id:any){
    return this.http.get(`${this.base_url}/view-product/${id}`,this.appendToken())
  }

  // add to wishlist
  addToWishlist(products:any){
    const body ={
      id:products.v_id,
      rate:products.rating_info.average,
      title:products.vehicle_info.v_name,
      image:products.vehicle_info.image_url
    }
    return this.http.post(`${this.base_url}/add_wishlist`,body,this.appendToken())
  }

  // view wishlist
  getWishlist(){
    return this.http.get(`${this.base_url}/view_wishlist`,this.appendToken())
  }

  deleteWishlistItem(id:any){
    const body ={id}
    return this.http.post(`${this.base_url}/remove-wishlist/${id}`,body,this.appendToken())
  }

  cartView(id:any){
    return this.http.get(`${this.base_url}/rent-now/${id}`,this.appendToken())
  }

  // add to cart
  addToCart(data:any){
    const body ={
      id:data.products.v_id,
      rate:data.products.rating_info.average,
      title:data.products.vehicle_info.v_name,
      image:data.products.vehicle_info.image_url,
      price:data.products.pricing_info.price,
      pickUp_date:data.registerForm.PickDate,
      return_date:data.registerForm.returnDate
    }
    return this.http.post(`${this.base_url}/add_to_cart`,body,this.appendToken())
  }
  //    -------admin-------------
  // login
  adminLogin(admin_name:any,password:any){
    const body = {admin_name,password}
    return this.http.post(`${this.base_url}/admin_login`,body)
  }

  getUsersToAdmin(){
    return this.http.get(`${this.base_url}/get-users`,this.appendToken())
  }

  // user delete
  adminDeleteUser(mobile:any){
    return this.http.delete(`${this.base_url}/admin-delete-the-user/${mobile}`,this.appendToken())
  }

 // add car details 
 addCarDetailsByAdmin(body:any){
  return this.http.post(`${this.base_url}/add-new-car`,body,this.appendToken())
 } 

 deleteProductByAdmin(id:any){
  return this.http.delete(`${this.base_url}/admin-delete-product/${id}`,this.appendToken())
 }

  //  update
 updateCarDetailsByAdmin(id:any,product:any){
  return this.http.post(`${this.base_url}/update-car-details/${id}`,product,this.appendToken())
 }

  //  message to admin
 messageToAdmin(email:any,userName:any,comment:any){
  const body ={email,userName,comment}
  return this.http.post(`${this.base_url}/message-to-admin`,body,this.appendToken())
 }

  //  get message
  getMessage(){
    return this.http.get(`${this.base_url}/get-message-admin`,this.appendToken())
  }


}
