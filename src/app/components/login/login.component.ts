import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';
import { AlertService } from '../../services/alert.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loading: boolean;
  submitted: boolean;
  returnUrl: string;

  /**
   * constructor that loads FormBuilder ,ActivatedRoute, Router, AccountService,  AlertService modules
   * @param formBuilder 
   * @param route 
   * @param router 
   * @param accountService 
   * @param alertService 
   */
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

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit() {
    this.loading = false;
    this.submitted = false;
    this.returnUrl = '';
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /**
   * ngOnDestroy(): To Destroy all the declared variables
   */
  ngOnDestroy() {
    this.loading = null;
    this.submitted = null;
    this.loginForm = null;
    this.returnUrl = null;
  }


  /**
   * get f(): convenience getter for easy access to form fields
   */
  get f() { return this.loginForm.controls; }

  /**
   * to submit login details
   */
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}






