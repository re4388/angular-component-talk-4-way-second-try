import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  // setup 1
  parent1Message = 'parent1 talk';
  parent1ReceiveMessage: string;
  constructor() { }

  // to receive msg
  gotMsg($event): void {
    this.parent1ReceiveMessage = $event + ' ' + Math.random();
  }
  ngOnInit(): void {
  }

}
