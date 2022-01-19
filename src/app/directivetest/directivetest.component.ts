import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivetest',
  template: `
    <hr>
    <h2 *ngIf="displayName; else elseBlock">
      Structural Directives
    </h2>
    
    <ng-template #elseBlock>
      <h2>Name is Hidden</h2>
    </ng-template>

    <div *ngIf="displayName; then thenBlock; else elseBlock2"></div>
    <ng-template #thenBlock> 
      <h2>if block works</h2> 
    </ng-template>

    <ng-template #elseBlock2>
      <h2>else blcok works</h2>
    </ng-template>

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'"> You picked red color</div>
      <div *ngSwitchCase="'blue'"> You picked blue color</div>
      <div *ngSwitchCase="'green'"> You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    
    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>

    <h2>first as f</h2>
    <div *ngFor="let color of colors; first as f">
      <p>{{f}} {{color}}</p>
    </div>

    <h2>last as l</h2>
    <div *ngFor="let color of colors; last as l">
      <p>{{l}} {{color}}</p>
    </div>

    <h2>odd as o</h2>
    <div *ngFor="let color of colors; odd as o">
      <p>{{o}} {{color}}</p>
    </div>

    <h2>even as e</h2>
    <div *ngFor="let color of colors; even as e">
      <p>{{e}} {{color}}</p>
    </div>
  `,
  styles: [``]
})
export class DirectivetestComponent implements OnInit {

  displayName = true;
  public color="yellow";

  public colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

}
