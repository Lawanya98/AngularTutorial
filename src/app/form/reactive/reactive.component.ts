import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/user-name.validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent implements OnInit {

  get userName() {
    return this.registrationForm.get('userName');
  }

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  ngOnInit() {
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

  // loadApiData() {
  //   // this.registrationForm.setValue({
  //   //   userName: 'Bruce',
  //   //   password: 'test',
  //   //   confirmPassword: 'test',
  //   //   address: {
  //   //     city: 'City',
  //   //     state: 'State',
  //   //     postalCode: '123456'
  //   //   }
  //   // })

  //   this.registrationForm.patchValue({
  //     userName: 'Bruce',
  //     password: 'test',
  //     confirmPassword: 'test',
  //     // address: {
  //     //   city: 'City',
  //     //   state: 'State',
  //     //   postalCode: '123456'
  //     // }
  //   })
}


