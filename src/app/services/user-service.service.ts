import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  // add user with backend 
  public addUser(user: any , agenceID){
    return this.http.post("http://localhost:8080/users/"+agenceID,user,{responseType:'text' as 'json'})
    
  }

  // get all users from backend
  public getUsers(){
    return this.http.get("http://localhost:8080/users/");
  }
  // delete user with backend
  public deleteUser(id){
    return this.http.delete("http://localhost:8080/users/"+id); 
  }

  // edit user with backend
  public modifUser(id,user,agenceID){
    return this.http.put("http://localhost:8080/users/"+id+"/"+agenceID,user,{responseType:'text' as 'json'});
  }

}
