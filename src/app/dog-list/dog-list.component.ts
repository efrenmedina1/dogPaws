import { Component, OnInit } from '@angular/core';
import {RoleService } from "../role.service"
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

public dog = [];
profile = false;
public Profile = {};

  constructor(private roleService: RoleService, private http: HttpClient) { }

  ngOnInit() {

    // this.dog = DOGS

    this.getDogs()
    .subscribe(data => 
      // console.log(data)
      this.dog = data.reverse() 
      // console.log(this.products)
      );
 
  }
  getDogs() : any {
    return this.http.get(`${APIURL}/doglist/`);
}

dogBreed(e) {
  e.preventDefault(); 
  let id = e.target.elements[0].value;
  console.log(id)
  fetch(`${APIURL}/doglist/search/${id}`,{
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.roleService.token
    })
  })
  .then(response =>{  response.json()
  .then(data => {this.dog = data})
  .then(data => console.log(this.dog))
})

  
}


profileTrue(e) {
  e.preventDefault(); 
  let id = e.target.id;
  console.log(id)
  fetch(`${APIURL}/profilelist/${id}`,{
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.roleService.token
    })
  })
  .then(response =>{  response.json()
  .then(data => {this.Profile = data})
  .then(data => console.log(this.Profile))
})

  this.profile = true
  
}

profileFalse(e) {
  e.preventDefault(); 

  this.profile = false;
  this.Profile = '';
  console.log(this.Profile)
  
}




}



