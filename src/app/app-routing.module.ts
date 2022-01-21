import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TestComponent } from './test/test.component';
import { Directive2Component } from './directive2/directive2.component';
import { DirectivetestComponent } from './directivetest/directivetest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { FormComponent } from './form/form.component';
import { TdfComponent } from './form/tdf/tdf.component';
import { ReactiveComponent } from './form/reactive/reactive.component';;


const routes: Routes = [
  //default routing at the very begining
  // {path: '', component: DepartmentListComponent},
  //redirect path
  { path: '', redirectTo: '/departments-change', pathMatch: 'full' },
  //pathMatch property tells how to match the url segments with configured routes
  //1. prefix --> if path is a prefix url, redirect to department but it doesn't work for empty path
  //2. full -->  says we redirect only if the ful url is empty

  { path: 'departments-change', component: DepartmentListComponent },

  //route parameter --> :id placeholder
  //{path: 'departments-change/:id', component: DepartmentDetailComponent},

  //reformat for CHILD ROUTING
  {
    path: 'departments-change/:id',
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },


  { path: 'employees', component: EmployeeListComponent },
  { path: 'test', component: TestComponent },
  { path: 'directivetest', component: DirectivetestComponent },
  { path: 'directive2', component: Directive2Component },
  {
    path: 'form',
    component: FormComponent,
    children: [
      { path: 'tdf', component: TdfComponent },
      { path: 'reactive', component: ReactiveComponent }
    ]
  },
  //wild card route should be the last one at the route configuration
  //because routing is matched from the very top
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  TestComponent,
  DirectivetestComponent,
  Directive2Component,
  PageNotFoundComponent,
  DepartmentDetailComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
  FormComponent,
  TdfComponent,
  ReactiveComponent
]
