import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  // define input decorator in child component
  @Input() fromPatent1: string;

  // step 2, we need to have an emitter to do the work
  @Output() outputMessage = new EventEmitter<string>();
  // step 3, also define a msg to send up
  child1Message = 'I am from child1';
  increment = 0;

  // step 4, use emitter to emit the msg
  triggerEmit(): void {
    this.outputMessage.emit(this.child1Message);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
