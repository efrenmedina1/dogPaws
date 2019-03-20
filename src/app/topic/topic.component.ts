import { Component, OnInit } from '@angular/core';
import {RoleService } from "../role.service"
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';
import { Router } from '@angular/router'

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  public comment = [];

  constructor(public roleService: RoleService, private router: Router, private http: HttpClient) { }

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

    fetch(`${APIURL}/reply/`, {
      method: 'POST',
      body: JSON.stringify(
        {
          "comment": comment,
          "userId": 5,
          "commentId": this.roleService.topic
          
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
