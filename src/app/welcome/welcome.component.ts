import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
// import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private storage: StorageService,
    // private router: Router,
    private location: Location
  ) {}

  users: any;

  currentUser = '';
  currentEmail = '';

  logout() {
    this.location.back();
  }

  ngOnInit(): void {
    this.users = JSON.parse(this.storage.get('users'));
    this.currentUser = this.users[0].firstName;
    this.currentEmail = this.users[0].email;
  }
}