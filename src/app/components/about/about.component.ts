import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  users: any;
  currentUser: string;
  displayUser: boolean = false;
  constructor(private accountService: AccountService, ) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("registerDetails"));
    this.currentUser = JSON.parse(localStorage.getItem("email"));
    if (this.users == null && this.currentUser == null) {
      this.displayUser = false;
    } else {
      this.displayUser = true;
    }
  }
  ngOnDestroy() {
    this.users = null;
    this.currentUser = null;
    this.displayUser = null;
  }

}
