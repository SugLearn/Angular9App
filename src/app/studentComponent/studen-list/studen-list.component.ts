import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-studen-list',
  templateUrl: './studen-list.component.html',
  styleUrls: ['./studen-list.component.css']
})
export class StudenListComponent implements OnInit {

  public students = [];
  public selectedId;
  department =[
    { "id":1, "name": "Angular" },
    { "id":2, "name": "React" },
    { "id":3, "name": "Javascript" },
    { "id":4, "name": "Java" },
  ]

  constructor( private _studentService: StudentServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this._studentService.getStudents().subscribe( data => this.students = data);

    //Optional router
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(list){
    this.router.navigate(['/department-details', list.id])

  }



}
