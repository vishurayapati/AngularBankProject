import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public myTodos = [
    'Wash coffee mug',
    'Take a shower',
    'Say hi to new Hire',
    'Shampoo your hair'
  ]

  public happyText = 'Manager is on Vacation';

  constructor() { }

  ngOnInit() {
    this.happyText = 'Manager is on Sick'
  }
  makeHappier() {
    this.happyText = 'Manager Got Fired'
  }

}
