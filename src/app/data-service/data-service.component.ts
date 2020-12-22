import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-data-service',
  template: `
  <div>
    <div> {{username }} </div>
    <input [(ngModel)]="username" placeholder="enter username" />
    <button (click)="updateUsername()">Change</button>
  </div>
  `,
  styleUrls: ['./data-service.component.css']
})
export class DataServiceComponent implements OnInit {
  username: string;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.username.subscribe(result => {
      this.username = result; // this set's the username to the default observable value
    });
  }

  updateUsername() {
    this.state.changeUsername(this.username);
  }

}
