import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  @Output() public shareEvent = new EventEmitter();

   public shareEvent1 = new Subject;

  constructor() { }
}
