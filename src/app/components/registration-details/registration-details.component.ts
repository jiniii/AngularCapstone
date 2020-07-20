import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit, OnDestroy {
  users: any;
  currentUser: string;
  myUser: any;
  displayUser: boolean = false;

  constructor(public accountService: AccountService) { }

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit(): void {
    this.users = '';
    this.myUser = '';
    this.displayUser = false;
    this.currentUser = JSON.parse(localStorage.getItem("email"));
    this.getRegisteredUsers();
  }

  /**
  * ngOnDestroy(): To Destroy all the declared variables
  */
  ngOnDestroy() {
    this.users = null;
    this.currentUser = null;
    this.displayUser = null;
    this.myUser = null;
  }

  /**
  * To get Registered User Details
  */
  getRegisteredUsers() {
    this.accountService.getRegisteredUsers().subscribe(data => {
      this.users = data;
      if (this.currentUser == null) {
        this.displayUser = false;
      } else {
        this.displayUser = true;
        const registeredUser = this.users.filter(user => user.email == this.currentUser);
        this.myUser = registeredUser[0];
      }
    })
  }


}
