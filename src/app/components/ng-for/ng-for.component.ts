import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  title: string;
  people: any[];
  peopleByCountry: any[];

  constructor() {
    this.title = 'NG FOR';
    this.people = [
      {
        "name": "Douglas  Pace"
      },
      {
        "name": "Mcleod  Mueller"
      },
      {
        "name": "Day  Meyers"
      },
      {
        "name": "Aguirre  Ellis"
      },
      {
        "name": "Cook  Tyson"
      }
    ];
    this.peopleByCountry = [
      {
        'country': 'UK',
        'people': [
          {
            "name": "Douglas  Pace"
          },
          {
            "name": "Mcleod  Mueller"
          },
        ]
      },
      {
        'country': 'US',
        'people': [
          {
            "name": "Day  Meyers"
          },
          {
            "name": "Aguirre  Ellis"
          },
          {
            "name": "Cook  Tyson"
          }
        ]
      }
    ];
  }

}
