import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-shared-component',
  template: `
    <h2>This is the {{parentData}} data</h2>

    <div class="notifications" *ngFor="let n of notifications">
    {{ n.message }}
  </div>

    <button (click)="fireEvent()">SendEvent</button>
  `,
  styleUrls: ['./shared-component.component.css']
})
export class SharedComponentComponent implements OnInit {

  @Input() public parentData;
  @Input() notifications: any[];

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit(' Child Component');
  }

}
