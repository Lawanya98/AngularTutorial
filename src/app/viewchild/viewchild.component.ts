import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit {

  @ViewChild("highlight")marker:ElementRef;
  
  // pointing to a child component with selector name - childView
  @ViewChild('childView') public child;

  constructor() {
    
   }

  ngOnInit() {

  }

  ngAfterViewInit(){
    console.log(this.marker);
    this.marker.nativeElement.style.color="red";
  }

  inc(){
    this.child.increment();
  }

  dec(){
    this.child.decrement();
  }
  
}
