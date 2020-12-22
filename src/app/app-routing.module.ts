import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { StudenListComponent } from './studen-list/studen-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


const routes: Routes = [
  { path:'',  redirectTo:'student-details', pathMatch: 'full'},
 { path:'studen-list', component: StudenListComponent},
 { path: 'student-details', component: StudentDetailsComponent},
 { path: 'department-details/:id', component: DepartmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
