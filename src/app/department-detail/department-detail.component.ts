import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    
    <button><a (click)="goPrevious()">Previous</a></button>
    <button><a (click)="goNext()">Next</a></button>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //read route parameters using ActivatedRoute Service 
      //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //snapshot of the current route
    //paraMap --> helps to get the parameter from the URL
      //this.departmentId=id;

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId=id;

    }) ; 
  }

  goPrevious(){
    let previousId = this.departmentId -1;
    //this.router.navigate(['/departments', previousId]);

    //Relative Navigation
    this.router.navigate(['../',previousId],{relativeTo: this.route});
  }

  goNext(){
    let nextId = this.departmentId +1;
    //this.router.navigate(['/departments', nextId]);

    //Relative Navigation
    this.router.navigate(['../',nextId],{relativeTo: this.route});
  }

  gotoDepartments(){
    let selectedId = this.departmentId? this.departmentId: null;
    //this.router.navigate(['/departments', {id: selectedId}]);

    //Relative Navigation
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});;

    // '../' go back one segment back

  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo: this.route});
  }

}
