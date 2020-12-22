import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
 public students =[];
  constructor(private _studentService: StudentServiceService, private Router: Router) { }

  ngOnInit(): void {
    this._studentService.getStudents().subscribe( data => this.students = data);
  }

  onSelect(list){
    this.Router.navigate(['/student-list', list.id])

  }

}
