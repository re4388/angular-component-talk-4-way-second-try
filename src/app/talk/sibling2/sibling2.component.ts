import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  constructor(private dataService: DataService) { }

  initMsg: string;
  increment = 0;

  ngOnInit(): void {
    this.dataService.messageSource.subscribe(msg => this.initMsg = msg);
  }

  getMoreMsg(): void {
    this.dataService.changeMsg(`click here and use data service method, click ${this.increment++}`);
  }

}
