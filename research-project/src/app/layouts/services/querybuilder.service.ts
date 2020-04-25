import { Injectable, EventEmitter } from '@angular/core';
import { TablesMap } from '../interface/tables.map';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class QuerybuilderService {
  private _messageObservable$: Subject<any> = new Subject<any>();

  constructor() { }

  public get messageObservable(): Subject<any> {
    return this._messageObservable$;
  }

  sendNotification(event) {
    this._messageObservable$.next(event);
  }

}
