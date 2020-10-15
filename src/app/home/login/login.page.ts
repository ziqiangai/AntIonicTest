import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember_me: [true]
  });
  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }

  submitForm(value: {}) {
    console.log(value);
    this.router.navigate(['./home'], {replaceUrl: true});
    console.log('login');
  }
}
