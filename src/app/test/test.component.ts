import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}  
    </h2>
    
    <h2>{{2+2}}</h2>
    <h2>{{"welcome " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>

    <h2>{{greetUser()}}</h2>

    <h2>{{siteUrl}}</h2>



    <p>property binding</p>

    <input [id]="myId" type="text" value="Vishwas">
    <input disabled="false" [id]="myId" type="text" value="Vishwas">
    <input [disabled]="false" [id]="myId" type="text" value="Vishwas">
    <input [disabled]="isDisabled" [id]="myId" type="text" value="Vishwas">

    <input bind-disabled="isDisabled" [id]="myId" type="text" value="Vishwas">

    <p>class binding</p>
    <h2 class="text-success">AtLink</h2>

    <h2 [class]="successClass">AtLink-c.b</h2>

    <h2 [class.text-danger]="hasError">AtLink</h2>

    <h2 [ngClass]="messageClasses">AtLink</h2>



    <p>style binding</p>

    <h2 [style.color]="'orange'">Style Binding</h2>
    <h2 [style.color]="hasError? 'red' : 'green'">Style Binding</h2>
    <h2 [style.color]="highlightColor">Style Binding2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding3</h2>

    <p>Event Binding</p>
    <button (click)="onClick($event)">Greet</button>
    {{greeting}}

     <p>Template reference variable</p>
     <input #myInput type="text">
     <button (click)="logMessage(myInput.value)">Log</button>

    <p>Two way binding</p>
    <input [(ngModel)]="userName" type="text">
    {{userName}}
    
  `,
  //interpolation --> {{}}
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "Chith"; //new property for string Vishwas
  public siteUrl = window.location.href;

  public myId = "testId";

  public isDisabled = true;

  public successClass="text-success";

  public hasError= true;

  public isSpecial= true;

  //create object for ng class directive
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";
  //create object for ng style directive
  public titleStyles ={
    color: "blue",
    fontStyle: "italic"
  }

  public greeting = "";
  onClick(event){
    console.log(event);
    this.greeting="Welcome to Atlink";
    console.log(event.type);
  }

  logMessage(value){
    console.log(value);
  }

  //two way binding
  public userName="";

  constructor() { }

  ngOnInit() {
    
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
