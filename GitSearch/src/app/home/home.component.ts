import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  constructor(private theService:ProfileService){}
  ngOnInit(){
    
   
  }
}
