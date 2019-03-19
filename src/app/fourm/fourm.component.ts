import { Component, OnInit } from '@angular/core';
import {RoleService } from "../role.service"
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';


@Component({
  selector: 'app-fourm',
  templateUrl: './fourm.component.html',
  styleUrls: ['./fourm.component.css']
})
export class FourmComponent implements OnInit {

public comment = [];


  constructor(public roleService: RoleService, private http: HttpClient) { }

  ngOnInit() {

  //   console.log(COMMENTS)
  //  this.comment = COMMENTS
  this.roleService.getToken()
  
   this.getComments()
      .subscribe(data => 
        // console.log(data)
        this.comment = data.reverse()
        // console.log(this.products)
        );
   
   

 
  }
  getComments() : any {
    return this.http.get(`${APIURL}/commentslist/`);
}

delete(e) {
  e.preventDefault();
  console.log('delete');
  var delID = e.target.elements[0].id;
  var token = this.roleService.token;
  console.log(token);
  console.log(delID);

  fetch(`${APIURL}/comments/${delID}`, {
    method: 'DELETE',
    headers: new Headers({
      Authorization: token
    })
  })
    .then((res) => this.ngOnInit() )
  console.log("delete")
}

update(DIO) {
  DIO.preventDefault(); 
  console.log("update")
}

createPost(e) {
    e.preventDefault(); 
    
    let comment = e.target.elements[0].value;
    console.log(comment);
    console.log(this.roleService.token);

    fetch(`${APIURL}/comments/`, {
      method: 'POST',
      body: JSON.stringify(
        {
          "description": comment,
          "userId": 5
          
          }
      ),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.roleService.token
      })
    })
    .then((res) => this.ngOnInit() )
  }
  

}