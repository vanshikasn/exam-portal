import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

//  private baseUrl="http://localhost:8080/api/v1/User"
  
  constructor(private http:HttpClient) { }

  //addUser

  public addUser(user:any) {
       return this.http.post('http://localhost:8080/user/',user)
  }
}
