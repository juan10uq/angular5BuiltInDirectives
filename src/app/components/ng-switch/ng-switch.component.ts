import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  title: string;
  people: any[];
  constructor() {
    this.title = 'NG SWITCH';
    this.people = [
      {
        "name": "Douglas  Pace",
        "age": 35,
        "country": 'MARS'
      },
      {
        "name": "Mcleod  Mueller",
        "age": 32,
        "country": 'USA'
      },
      {
        "name": "Day  Meyers",
        "age": 21,
        "country": 'HK'
      },
      {
        "name": "Aguirre  Ellis",
        "age": 34,
        "country": 'UK'
      },
      {
        "name": "Cook  Tyson",
        "age": 32,
        "country": 'USA'
      },
      {
        "name": "Cook  test",
        "age": 32,
        "country": ''
      }
    ];
  }

}
