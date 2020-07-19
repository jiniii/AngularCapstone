import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../app/models/user.model';
import { AccountService } from '../app/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string;
  user: User;
  getUsers: any;
  currentUser: string;
  myUser: any;

  constructor(
    private accountService: AccountService
  ) {
    this.accountService.email.subscribe(x => this.user = x);
  }
  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit(): void {
    this.title = 'E-Cart';
    this.getUsers = '';
    this.myUser = '';
    this.currentUser = JSON.parse(localStorage.getItem("email"));
    this.getRegisteredUsers();
  }
  /**
   * ngOnDestroy(): To destroy all the declared variable
   */
  ngOnDestroy() {
    this.title = null;
    this.getUsers = null;
    this.myUser = null;
    this.currentUser = null;
  }
  /**
  * To get Registered User Details
  */
  getRegisteredUsers() {
    this.accountService.getRegisteredUsers().subscribe(data => {
      this.getUsers = data;
      const registeredUser = this.getUsers.filter(user => user.email == this.currentUser);
      this.myUser = registeredUser[0];
    })
  }

  /**
   * Logout the user
   */
  logout() {
    this.accountService.logout();
  }
}
