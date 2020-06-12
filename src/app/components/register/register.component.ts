import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // form: FormGroup;
  // loading = false;
  // submitted = false;

  constructor(
   // private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   username: ['', Validators.required],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
  }
 // get f() { return this.form.controls; }

  // onSubmit() {
  //   this.submitted = true;

  //   // reset alerts on submit
  //  // this.alertService.clear();

  //   // stop here if form is invalid
  //   if (this.form.invalid) {
  //     return;
  //   }

  //   this.loading = true;
  //   this.accountService.register(this.form.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.alertService.success('Registration successful', { keepAfterRouteChange: true });
  //         this.router.navigate(['../login'], { relativeTo: this.route });
  //       },
  //       error => {
  //         this.alertService.error(error);
  //         this.loading = false;
  //       });
  // }

}
