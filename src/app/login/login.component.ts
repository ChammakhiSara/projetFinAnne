import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required])
    });
  }
  
  onSubmit(){
    let users = JSON.parse(localStorage.getItem('users')) || [];

    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    let userFound = users.find((usr) => (usr.username === username) && (usr.password === password));
    
    if (userFound !== undefined){
      // alert('Successful Login');
      // this.router.navigateByUrl('liste-users');
    }else {
        this.invalidLogin = true;
      } 

  }
}
