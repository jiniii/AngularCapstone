import { Component } from '@angular/core';
import {User} from '../app/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstoneProject';
  //user: User;
  user:boolean=true;

  constructor(
   // private accountService: AccountService
    ) {
    //  this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
     // this.accountService.logout();
  }
}
