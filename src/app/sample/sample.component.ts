import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
  <input [id]="myId" type="text" value="Newvalue" >
  <h2 class="text-success">Angular Application</h2>
  <h2 [class.text-danger]="hasError">Class Binding</h2>
  <h2 [style.color]="hasError ? 'orange' : 'green'">Style Binding</h2>

  <button (click)="onClick($event)">ClickEvent</button>
  {{Value}}
  <br>
  <input #myinput type="text">
  <button (click)="logMessage(myinput.value)">Log</button>
   <br>

  <input [(ngModel)]="Modelname" type="text" >
  {{Modelname}}
  `,
  styles: [
    `.text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }`
  ]
})
export class SampleComponent implements OnInit {

  public name="angular application";
  public myId= "testId";
  public hasError = true;
  public Value = "";
  public Modelname = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log("Click Event triggered"+ event);
    this.Value = "New Value binded";
  }

  logMessage(value){
    console.log(value);

  }

}
