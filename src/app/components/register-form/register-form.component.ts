import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';
import { APIRequestComponent } from 'src/app/services/apirequest/apirequest.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [ APIRequestComponent ]
})
export class RegisterFormComponent implements OnInit {

  private isLinear: boolean = true;
  private firstFormGroup: FormGroup;
  private secondFormGroup: FormGroup;
  private passwordGroup: FormGroup;
  private username: string;
  private password: string;
  private email: string;
  private loading: boolean = false;
  private isOpen = false;
  constructor(private _formBuilder: FormBuilder, private apiRequest: APIRequestComponent ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required ]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required ]
    });
    this.passwordGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required ]
    })
  }
  private register() {
    this.loading=true;
    console.log(this.apiRequest.registerUser({
      username: this.username,
      password: this.password,
      email: this.email,
      joinDate: new Date()
    }));
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
