import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/user-name.validator';
import { MustMatch } from '../../shared/must-match.validators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }



  // get userName() {
  //   return this.registrationForm.get('userName');
  // }

  // get password() {
  //   return this.registrationForm.get('password');
  // }

  // get confirmPassword() {
  //   return this.registrationForm.get('confirmPassword');
  // }

  // rather than writing one method for each form control

  get f() { return this.registrationForm.controls; }

  ngOnInit() {

    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, {
      validator: MustMatch('password', 'confirmPassword')
      //validator is in the form group not on a form control
    });


    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      const email = this.registrationForm.get('email');
      if (checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })

  }

  onReset() {
    this.registrationForm.reset();
  }

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Vishwa'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  loadApiData() {
    // this.registrationForm.setValue({
    //   userName: 'Bruce',
    //   password: 'test',
    //   confirmPassword: 'test',
    //   address: {
    //     city: 'City',
    //     state: 'State',
    //     postalCode: '123456'
    //   }
    // });

    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
    });
  }

  onSubmit() {


    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value, null, 4));
  }

}
