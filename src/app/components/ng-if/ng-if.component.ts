import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  title: string;
  people: any[];
  constructor() {
    this.title = 'NG IF-THEN-ELSE';
    this.people= [
      {
        "name": "Douglas  Pace",
        "age": 35
      },
      {
        "name": "Mcleod  Mueller",
        "age": 32
      },
      {
        "name": "Day  Meyers",
        "age": 21
      },
      {
        "name": "Aguirre  Ellis",
        "age": 34
      },
      {
        "name": "Cook  Tyson",
        "age": 32
      }
    ];
  }

}
