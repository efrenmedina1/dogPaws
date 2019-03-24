import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {RoleService } from "../role.service"
import { APIURL } from '../../environments/environment.prod';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, public roleService: RoleService ) { }

  ngOnInit() {
    this.roleService.getToken()
  }
  signUp(e) {
    e.preventDefault(); 
    console.log(e);
    var user = e.target.elements[0].value;
    var username = user.toLowerCase();
    var password = e.target.elements[1].value;
  console.log(username, password);
  fetch(`${APIURL}/user`, {
  method: 'POST',
  body: JSON.stringify({
    "user": {
    username: username,
    password: password,
    role: "user"
    }
  }),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
.then(
  (response) => response.json()
  .catch((err) => console.log(err))
)

.then((json) => {
if(json == undefined) {
  console.log("user alrdy exist")
  window.alert( "User already exist. Please choose another username to signup" );
} else {
  console.log(json.user)
  this.roleService.role = json.user.role
  this.roleService.username = json.user.username
  this.roleService.token = json.sessionToken

  // this.router.navigate(['home'])
  window.alert("Logged in");
} 
}
)
.then(response =>  sessionStorage.setItem('role', this.roleService.role) )
.then(response =>  sessionStorage.setItem('username', this.roleService.username) )
.then(response =>  sessionStorage.setItem('token', this.roleService.token) )
.then(response =>  this.ngOnInit() )
.then(response =>  this.router.navigate(['profile']) )
}

loginUser(e) {
  e.preventDefault(); 
  console.log(e);
  var user = e.target.elements[0].value;
  var username = user.toLowerCase();
  var password = e.target.elements[1].value;
console.log(username, password);
fetch(`${APIURL}/user/login`, {
method: 'POST',
body: JSON.stringify(
  {
  "user" : {
  username: username,
  password: password
    }
  }
),
headers: new Headers({
  'Content-Type': 'application/json'
})
})
// res.json()
.then(response =>  response.json() )
.then(json =>  { 
  if(json.error == "failed to authenticate") {
  window.alert( "User does not exisit. Please sign up" );
  console.log(json);
} else if(json.error == "You failed to login") {
  window.alert( "Incorrect Password. Contact admin to reset password" );
  console.log(json)
} else {
  console.log(json)
  this.roleService.role = json.user.role
  this.roleService.username = json.user.username
  this.roleService.token = json.sessionToken

  this.router.navigate(['home'])
  window.alert("Logged in");
}
} )

// .then(json => {
//   console.log(json)
//   this.roleService.role = json.user.role
//   this.roleService.token = json.sessionToken

//   this.router.navigate([''])
//   window.alert("Logged in");
// })
.then(response =>  sessionStorage.setItem('role', this.roleService.role) )
.then(response =>  sessionStorage.setItem('username', this.roleService.username) )
.then(response =>  sessionStorage.setItem('token', this.roleService.token) )
.then(response =>  this.ngOnInit() )
.then(response =>  this.router.navigate(['profile']) )
// .then(response =>  window.location.reload() )
}


  
}