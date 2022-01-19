import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      Counter child component.
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  public counter = 0;

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
