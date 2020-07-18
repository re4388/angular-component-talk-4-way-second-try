import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Child2Component } from '../parent2/child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements AfterViewInit, OnInit {

  // step 2 use ViewChild to inject child component
  @ViewChild(Child2Component) injectedChild2;

  msg: string;

  // step 3 since child component will only ready afterViewInit hook, so we need
  // to do our job inside this hook function
  ngAfterViewInit(): void {
    // pass child variable (you shall define one in child component) to to this parent scope
    this.msg = this.injectedChild2.childMsg;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
