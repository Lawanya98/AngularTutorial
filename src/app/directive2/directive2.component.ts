import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive2',
  templateUrl: './directive2.component.html',
  styleUrls: ['./directive2.component.css']
})
export class Directive2Component implements OnInit {

  public courses= [];

  viewMode = '';

  courseList = [
    {id: 1, name: 'Course 1'},
    {id: 2, name: 'Course 2'},
    {id: 3, name: 'Course 3'},
  ];

  onAdd(){
    this.courseList.push({id: 4, name: 'Course 4'})
  }

  onRemove(course){
    let index = this.courseList.indexOf(course);
    this.courseList.splice(index, 1);
  }

 
  constructor() { }

  ngOnInit() {
  }

}
