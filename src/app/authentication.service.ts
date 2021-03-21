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

  // call for authentication backend api with a loginRequest in parameter(username + motDePasse)
  authenticate(loginRequest) {
    return this.httpClient.post<any>('http://localhost:8080/auth/login',loginRequest).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',loginRequest.username);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
  }


isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  //return true if user not null
  return !(user === null)
}

logOut() {
  sessionStorage.removeItem('username');
}
}
