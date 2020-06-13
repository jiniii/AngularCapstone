import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService} from '../../services/account.service';
import {AlertService} from '../../services/alert.service'

export class User {
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public location: string;
  public monileNumber: number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  // locations: string[] = [
  //   'Kochi',
  //   'Pune',
  //   'Chennai',
  //   'Bengaluru',
  //   'Kolkata'
  // ];
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AccountService,
      private alertService: AlertService
  ) {
      // redirect to home if already logged in
      if (this.accountService.userValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      location: ['', Validators.required],
      mobileNo: ['', Validators.required, Validators.minLength(10)],
    });
  }
 get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
