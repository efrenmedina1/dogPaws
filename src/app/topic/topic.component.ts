import { Component, OnInit } from '@angular/core';
import {RoleService } from "../role.service"
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';
import { Router } from '@angular/router'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  public comment = [];
  profile = false;
  public Profile = {};
  p:any
  

  constructor(public roleService: RoleService, private router: Router, private http: HttpClient, private modalService: NgbModal,
    ) { }

  ngOnInit() {
    this.roleService.getToken()

    this.getComments()
  }

  getComments = () => {
    let commentId = this.roleService.topic
    console.log(commentId)
    fetch(`${APIURL}/replies/${commentId}`,{
      method: 'GET',
     
    })
    .then(response =>{  response.json()
    .then(data => {this.comment = data})
    .then(data => console.log(this.comment))
  })
  
  }

  createPost(e) {
    e.preventDefault(); 
    
    let comment = e.target.elements[0].value;
    console.log(comment);
    console.log(this.roleService.token);
    if(comment.length > 2) {
    fetch(`${APIURL}/reply/`, {
      method: 'POST',
      body: JSON.stringify(
        {
          "comment": comment,
          "username": this.roleService.username,
          "userId": 5,
          "commentId": this.roleService.topic
          
          }
      ),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.roleService.token
      })
    })
    .then((res) => e.target.elements[0].value = "" )
    .then((res) => this.ngOnInit() )
  } else{
    window.alert("Please input a comment");
  }
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
