import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  message: string;
  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.messageSource.subscribe(msg => {
      this.message = msg;
    });
  }

}
