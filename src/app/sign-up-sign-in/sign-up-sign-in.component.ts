import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up-sign-in',
  templateUrl: './sign-up-sign-in.component.html',
  styleUrls: ['./sign-up-sign-in.component.css'],
})
export class SignUpSignInComponent implements OnInit {
  x: any;
  y: any;
  z: any;

  users: any = [];

  signUpForm: any;
  loginForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storage: StorageService
  ) {
    // this.signUpForm = new FormGroup();
  }

  ngOnInit() {
    this.signUpFormValidation();
    this.loginFormValidation();

    this.x = document.getElementById('login');
    this.y = document.getElementById('signup');
    this.z = document.getElementById('btn');
  }

  signup() {
    if (this.x && this.y && this.z) {
      this.x.style.left = '-600px';
      this.y.style.left = '50px';
      this.z.style.left = '110px';
    }
  }
  login() {
    if (this.x && this.y && this.z) {
      this.x.style.left = '60px';
      this.y.style.left = '600px';
      this.z.style.left = '0';
    }
  }

  signUpFormValidation() {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      signupEmail: ['', Validators.required],
      password: ['', Validators.required],
      passwordCheck: ['', Validators.required],
    });
  }
  loginFormValidation() {
    this.loginForm = this.fb.group({
      loginEmail: ['', Validators.required],
      loginPassword: ['', Validators.required],
    });
  }

  onSubmitLoginForm() {
    let loginEmail = this.loginEmail.value;
    let loginPassword = this.loginPassword.value;

    let currentUsers = JSON.parse(this.storage.get('users'));

    if (currentUsers) {
      if (
        currentUsers[0].email === loginEmail &&
        currentUsers[0].password === loginPassword
      ) {
        this.router.navigateByUrl('signed-user');
      } else {
        alert(`Invalid email or password! Try again.`);
      }
    } else {
      alert(`Invalid email or password! Try again.`);
    }
  }

  onSubmitSignupForm() {
    let signupeMail = this.signupEmail.value;
    var first = this.firstName.value;
    var last = this.lastName.value;
    var signupPass = this.password.value;
    var passwordC = this.passwordCheck.value;

    let isValidPass = true;
    let isPassAndChMatch = true;
    let isValidFirstAndLast = true;

    if (signupPass != passwordC) {
      isPassAndChMatch = false;
    } else {
      isPassAndChMatch = true;
    }

    // if (first > 50 || last > 50) {
    //   alert('max characters: 50');
    //   isValidFirstAndLast = false;
    // } else {
    //   isValidFirstAndLast = true;
    // }

    if (isValidPass && isPassAndChMatch && isValidFirstAndLast) {
      this.users.push({
        firstName: first,
        lastName: last,
        email: signupeMail,
        password: signupPass,
      });

      if (this.users) {
        this.storage.add(`users`, JSON.stringify(this.users));
      }
      alert('New user signed up!');
      this.router.navigateByUrl('signed-user');
    } else {
      alert('err');
    }
  }

  get firstName(): FormControl {
    return this.signUpForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.signUpForm.get('lastName') as FormControl;
  }

  get signupEmail(): FormControl {
    return this.signUpForm.get('signupEmail') as FormControl;
  }

  get password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }

  get passwordCheck(): FormControl {
    return this.signUpForm.get('passwordCheck') as FormControl;
  }

  get loginEmail(): FormControl {
    return this.loginForm.get('loginEmail') as FormControl;
  }

  get loginPassword(): FormControl {
    return this.loginForm.get('loginPassword') as FormControl;
  }
}