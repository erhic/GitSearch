import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GitSearch';
  myUserInfo: any = []
  myRepoInfo: any = []
  usernam:string='erhic';

  constructor(private myService:ProfileService){

  }
  ngOnInit(){

  }
  }

