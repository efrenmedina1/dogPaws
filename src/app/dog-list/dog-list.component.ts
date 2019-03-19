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
}