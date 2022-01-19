import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Users } from '../users';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
formInput= new Users("","","","","","","",new Date(),0,0,0)
  constructor() { }
@Output()searchuser:EventEmitter<string>=new EventEmitter<string>()
search(){
  this.searchuser.emit(this.formInput.login)
  this.formInput=new Users("","","","","","","",new Date(),0,0,0)
}
  ngOnInit(): void {
  }

}
