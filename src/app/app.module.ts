import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SharedComponentComponent } from './shared-component/shared-component.component';
import { DataServiceComponent } from './data-service/data-service.component';
import { StudenListComponent } from './studentComponent/studen-list/studen-list.component';
import { StudentDetailsComponent } from './studentComponent/student-details/student-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from './custom-directive/color.directive';
import { DepartmentDetailsComponent } from './studentComponent/department-details/department-details.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SharedComponentComponent,
    DataServiceComponent,
    StudenListComponent,
    StudentDetailsComponent,
    ColorDirective,
    DepartmentDetailsComponent,
    ReactiveFormComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
