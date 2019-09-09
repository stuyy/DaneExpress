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

  loginUser(userData) {
    return this.http.post("http://localhost:3001/auth/login", userData, {
      withCredentials: true
    }).subscribe();
  }
}
