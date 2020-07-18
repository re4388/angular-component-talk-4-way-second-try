import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // init msg and convert to Observable
  private initMsgFromService = new BehaviorSubject('the init message');
  messageSource = this.initMsgFromService.asObservable();

  constructor() { }

  // we can have a kind of global service to let other to use
  changeMsg(msg: string): void {
    this.initMsgFromService.next(msg);
  }

}
