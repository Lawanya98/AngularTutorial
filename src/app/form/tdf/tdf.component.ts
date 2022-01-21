import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../../enrollment.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

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

  onSubmit(f) {
    // console.log(this.userModel);
    this._enrollmenrService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success', data),
        error => console.log('Error', error)
      )
    console.log(f);

  }

}
