import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private httpClient:HttpClient) {}
    // making a call to api 
    profileCall(){
      return this.httpClient.get('https://fakestoreapi.com/products/')
    }
    
   
}
