import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
