import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';
import { AlertService } from '../../services/alert.service'
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit, OnDestroy {

  form: FormGroup;
  loading: boolean;
  submitted: boolean;
  locations: any;
  users: any;

  /**
   * Constructor loads the Router,ActivatedRoute,FormBuilder,AlertService,AccountService modules
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
  ngOnInit(): void {
    this.loading = false;
    this.submitted = false;
    this.locations = [
      'Kochi',
      'Pune',
      'Chennai',
      'Bengaluru',
      'Kolkata',
      'Hyderabad'
    ];
    this.users = [];
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      location: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.getRegisteredUsers();
  }

  /**
   * ngOnDestroy(): To Destroy all the declared variables
   */
  ngOnDestroy() {
    this.locations = null;
    this.loading = null;
    this.submitted = null;
    this.form = null;
    this.users = null;
  }

  /**
   * get f(): To get form control values
   */
  get f() { return this.form.controls; }

  /**
   * To get Registered User Details
   */
  getRegisteredUsers() {
    this.accountService.getRegisteredUsers().subscribe(data => {
      this.users = data;
    })
  }

  /**
   * onSubmit(): To Submit the Register form details
   */
  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.register();
  }
  /**
  * To register for new users and validating if already a existing email id is there in the db
  */
  register() {
    const user = this.form.value;
    if (this.users.find(x => x.email === user.email)) {
      this.alertService.error('Email Id "' + user.email + '" is already taken');
      this.form.reset();
      this.loading = false;

    } else {
      this.ok();
    }
  }

  /**
   * on Successfull registration
   * @param body 
   */
  ok(body?) {
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
