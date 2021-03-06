import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DepartmentDetailsComponent } from './studentComponent/department-details/department-details.component';
import { StudenListComponent } from './studentComponent/studen-list/studen-list.component';
import { StudentDetailsComponent } from './studentComponent/student-details/student-details.component';


const routes: Routes = [
  { path:'',  redirectTo:'student-details', pathMatch: 'full'},
 { path:'studen-list', component: StudenListComponent},
 { path: 'student-details', component: StudentDetailsComponent},
 { path: 'department-details/:id', component: DepartmentDetailsComponent,
 children: [
   {path: 'reactive-form', component: ReactiveFormComponent}
 ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
