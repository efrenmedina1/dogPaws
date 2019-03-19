import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  
  public adminRole = false;
  public userRole = false;
  public noRole = true;
  public role = '';
  public token = '';

  constructor() { }
  
  getToken(){
    this.role = sessionStorage.getItem('role')
   this.token = sessionStorage.getItem('token')
   if (this.role == "admin" ) {
    this.adminRole = true;
    this.userRole = true;
    this.noRole = false;
  } else if(this.role == "user" ) {
    this.adminRole = false;
    this.userRole = true
    this.noRole = false;
  } else {
    console.log("no login")
    this.noRole = true;
  }
}
}
