import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  title: string;
  //set a property that holds a random color for our style.
  randomColor: string;
  //declare the fontsize and background color properties
  font_size: string;
  background_color: string;

  constructor() {
    this.title = 'NG STYLE';
    this.font_size = "12px";
    this.background_color = "grey ";
    this.randomColor = this.getRandomColor();
  }

  //function to get random colors
  public getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //function to set a new random color
  setColor() {
    this.randomColor = this.getRandomColor();
  }

}
