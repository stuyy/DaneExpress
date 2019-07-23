import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
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
  constructor(private _formBuilder: FormBuilder) { }

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
    alert("Signing up.");
    this.loading=true;
    axios.post('http://localhost:3001/register', {
      username: this.username,
      password: this.password,
      email: this.email,
      joinDate: new Date()
    }, { withCredentials: true})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
