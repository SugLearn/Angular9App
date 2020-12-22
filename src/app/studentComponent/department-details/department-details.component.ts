import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    //using snapshot to get Id
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    //this is best way to get Id using ParamMap
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    })

  }

  goToPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['department-details', previousId])
  }

  goToNext(){
    let previousId = this.departmentId + 1;
    this.router.navigate(['department-details', previousId])
  }

  //optional routing
  goToBack(){

    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['studen-list', {id: selectedId}])

  }

  //child routing
  showForm(){
    this.router.navigate(['reactive-form'], { relativeTo: this.route });
  }



}
