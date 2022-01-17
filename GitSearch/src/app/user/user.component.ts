import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Users } from '../users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user!:Users

searchNewUser(name:string){
  console.log(name)
  this.profile.fetchRequest(name)
  this.user=this.profile.user
  
}
  constructor(private profile:ProfileService) { }

  ngOnInit(): void {
  }

}
