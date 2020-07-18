import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  // step1: define a message, we will get this
  // message in paren2t component
  childMsg = 'hello, parent2, I am child2';
  constructor() { }

  ngOnInit(): void {
  }

}
