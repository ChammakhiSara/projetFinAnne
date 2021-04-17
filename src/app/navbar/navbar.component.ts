import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   user :any;
  
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('username');
   console.log(this.user);
   
   
  }

  LogOut(){
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}
