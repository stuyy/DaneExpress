import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { APIRequestComponent } from '../../services/apirequest/apirequest.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [ APIRequestComponent ]
})
export class LoginFormComponent implements OnInit {

  private username: string;
  private password: string;
  
  constructor(private apiRequest: APIRequestComponent) { 
  
  }

  ngOnInit() {

  }
  login() {
    console.log(this.apiRequest.loginUser({ username: this.username, password: this.password}));
  }

}
