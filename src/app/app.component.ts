import { Component} from '@angular/core';
import { User } from '../app/models/user.model';
import { AccountService } from '../app/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstoneProject';
  user: User;
  searchText: string;

  constructor(
    private accountService: AccountService
  ) {
    this.accountService.email.subscribe(x => this.user = x);
    console.log("useremail", this.user);
  }

  logout() {
    this.accountService.logout();
  }
}
