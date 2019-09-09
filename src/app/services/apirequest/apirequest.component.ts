import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-apirequest',
  templateUrl: './apirequest.component.html',
  styleUrls: ['./apirequest.component.css']
})
export class APIRequestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  // https://stackoverflow.com/questions/46408537/angular-httpclient-http-failure-during-parsing
  loginUser(userData) {
    return this.http.post("http://localhost:3001/auth/login", userData, {
      withCredentials: true,
      responseType: 'text'
    });
  }
  registerUser(userData) {
    return this.http.post("http://localhost:3001/register", userData, { 
      withCredentials: true
    });
  }

  isAuthorized() {
    return this.http.get("http://localhost:3001/auth/authorized/", {
      withCredentials: true })
  }
}
