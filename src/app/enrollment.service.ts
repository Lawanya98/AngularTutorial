import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './form/user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = '';

  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    return this._http.post<any>(this._url, user);
    //post request will return the response as an observable
    //need to subscribe to the observable in form component
  }
}
