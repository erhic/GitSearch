import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
profile:any;
  constructor(private pObj:ProfileService) { }

  ngOnInit(): void {
    // console.log(this.pObj.profileCall())


    //subscribing to the service ,to receive data from the function
    this.pObj.profileCall().subscribe((data)=>{
      this.profile=data;
      console.log(this.profile)
    })
  }

}
