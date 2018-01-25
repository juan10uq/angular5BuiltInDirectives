import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  title: string;
  my_Class: string;
  //variable to hold boolean value to style1
  isClass1Visible: boolean;
  //variable to hold boolean value to style2
  isClass2Visible: boolean;

  constructor() {
    this.title = 'NG CLASS';
    this.my_Class = 'style1';
    this.isClass1Visible = false;
    this.isClass2Visible = false;
  }

  //function to change the class from style1 to style 2 when clicked
  toggle_class() {
    if (this.my_Class == "style1") {
      this.my_Class = 'style2';
    } else {
      this.my_Class = 'style1';
    }
  }
}
