import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private showRegister: boolean = false;
  private showLogin: boolean = false;
  constructor() { }

  ngOnInit() {

  }
  register() {
    this.showRegister = !this.showRegister;
    this.showLogin = false;
  }
  login() {
    this.showLogin = !this.showLogin;
    this.showRegister = false;
  }
}
