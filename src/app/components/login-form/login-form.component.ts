import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private username: string;
  private password: string;
  
  constructor() { 
  
  }

  ngOnInit() {

  }
  login() {
    axios.post('http://localhost:3001/auth/login', {
      username: this.username,
      password: this.password
    }, { withCredentials: true})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

}
