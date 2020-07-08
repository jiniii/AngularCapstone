import { Component } from '@angular/core';
import { User } from '../app/models/user.model';
import { AccountService } from '../app/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Cart';
  user: User;

  constructor(
    private accountService: AccountService
  ) {
    this.accountService.email.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
  }
}
