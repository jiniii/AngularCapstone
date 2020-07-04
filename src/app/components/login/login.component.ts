import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';
import { AlertService } from '../../services/alert.service'
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

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
  users: any;
  existingUser: any;

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
    this.users = [];
    this.existingUser = [];
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.getRegisteredUsers();
    this.getLoggedUser();


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
    this.users = null;
    this.existingUser = null;
  }


  /**
   * get f(): convenience getter for easy access to form fields
   */
  get f() { return this.loginForm.controls; }

  /**
   * To get Registered User Details
   */

  getRegisteredUsers() {
    this.accountService.getRegisteredUsers().subscribe(data => {
      this.users = data;
    })
  }
  /**
   * To get Logged User details
   */
  getLoggedUser() {
    this.accountService.getLoggedInUsers().subscribe(data => {
      this.existingUser = data;
      console.log("existinguser", this.existingUser)
    })
  }

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
    this.authenticate();
  }

  /**
   * To authenticate the existing user/ new user who already registered
   */
  authenticate() {
    const { email, password } = this.loginForm.value;
    const user = this.users.find(x => x.email === email && x.password === password);
    console.log("checking authentication", user)
    if (!user) {
      this.alertService.error('EmailId or password is incorrect');
      this.loginForm.reset();
      this.loading = false;
    } else {
      this.ok({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        location: user.location,
        mobileNum: user.mobileNum,
        token: 'fake-jwt-token'
      })
    }

  }

  /**
   * If user email and password are successfull 
   * @param body 
   */
  ok(body?) {
    const { email, password } = this.loginForm.value;
    const existing = this.existingUser.find(x => x.email === email && x.password === password);
    //checking for existing user, if user is new then data will be sent to db
    if (!existing) {
      console.log("caame to if not existing user")
      this.accountService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          data => {
            localStorage.setItem('email', JSON.stringify(this.f.email.value));
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.alertService.error("login/password is wrong");
            this.loading = false;
          });

    } else {      //data is existing, then user is allowed to enter into homepage
      console.log("came to existing user")
      localStorage.setItem('email', JSON.stringify(this.f.email.value));
      this.router.navigate([this.returnUrl]);
    }
  }
}






