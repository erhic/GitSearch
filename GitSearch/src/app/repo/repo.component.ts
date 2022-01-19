import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Repository } from '../repository';
import { Users } from '../users';

@Component({
  selector: 'app-user',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
// user!:Users
repo!:Repository[];

searchNewUser(name:string){
  console.log(name)
  // this.profile.fetchRequest(name)
  // this.user=this.profile.user
  this.profile.fetchRepo(name).subscribe(data=>{
  this.repo = data})
  
}
  constructor(private profile:ProfileService) { }

  ngOnInit(): void {
  }

}
