import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-communication',
  template: `
  
  //use getters and setters<br/>
  {{message}}
  <h2>Component Communication</h2>
  <!--<h2>{{"Hello" + parentData}}</h2>-->

  // bind the new property name
  <h2>{{"Hello" + name}}</h2>

  //child to parent
  <button (click)="fireEvent()">Send Event</button>

  

  `,
  styles: []
})
export class CommunicationComponent implements OnInit {

  // @Input()  public parentData;

  //when you want to use different property name than the one parent component uses
  @Input('parentData')  public name;

  @Output() public childEvent = new EventEmitter();

  se1:Subscription;
  se2:Subscription;

  //use getters and setter

  private _loggedIn: boolean;
  message: String;

  get loggedIn(){
    return this.loggedIn;
  }

  @Input()
  set loggedIn(value: boolean){
    this._loggedIn = value;
    if(value === true){
      this.message = "Welcome back user";
    }
    else{
      this.message = "Please log in";
    }
  }

  constructor(private sharedService:SharedServiceService) { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey User');
  }

  ngAfterContentInit(){
    this.se1= this.sharedService.shareEvent.subscribe(parameter => {
      console.log(parameter);
    });

    this.se2=this.sharedService.shareEvent1.subscribe(() => {
      console.log("ShareEvent1");
    });
  }

  ngOnDestroy(){
    this.se1.unsubscribe();
    this.se2.unsubscribe();
  }

}
