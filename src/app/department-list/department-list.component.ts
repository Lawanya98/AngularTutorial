import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h2> Route Parameter</h2>
    <h3>Department List</h3>
    <ul class="items">      
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
      <button><span class="badge">{{department.id}}</span> {{department.name}}</button>
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" }
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {

    //use router instance navigate method
    //argument for this method is link parameters array
    //it is all the information angular need to construct the path, for that we need 2 details
    // 1. path we want to navigate to 
    // 2. route parameter

    //this.router.navigate(['/departments', department.id]);

    //for relative navigating 
    this.router.navigate([department.id], { relativeTo: this.route });
    //here only contain the parameter
    //don't care what the URL right now BUT throgh the current URL append the ID
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
