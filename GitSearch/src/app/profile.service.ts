import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
