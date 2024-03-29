import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient){ }
  private  baseUrl2 = 'http://localhost:8080/users/';
  // call for authentication backend api with a loginRequest in parameter(username + motDePasse)
  authenticate(loginRequest) {
    return this.httpClient.post<any>('http://localhost:8080/auth/login',loginRequest).pipe(
     map(
       userData => {
        localStorage.setItem('username',loginRequest.username);
        let tokenStr= 'Bearer '+userData.token;
        localStorage.setItem('token', tokenStr);
        

        const headers = new HttpHeaders({
        
          'Authorization': tokenStr
        })
        // recuperation du role avec login
        this.httpClient.get<any>(this.baseUrl2+'username/'+loginRequest.username,{headers : headers}).subscribe(
          data=>{
            let role = data.roles[0].name;            
            localStorage.setItem('role',role);
          }
        )
          return userData;
       }
     )

    );
  }


isUserLoggedIn() {
  let user = localStorage.getItem('username')
  //return true if user not null
  return !(user === null)
}

logOut() {
  localStorage.removeItem('username');
}
}
