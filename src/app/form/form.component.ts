import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User('', 'rob@test.com', 3245643, 'default', 'morning', true);

  constructor(private _enrollmenrService: EnrollmentService) { }

  ngOnInit() {
  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    // console.log(this.userModel);
    this._enrollmenrService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success', data),
        error => console.log('Error', error)
      )

  }

}
