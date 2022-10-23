import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ff: boolean = false;
  private isLoggined: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLoggineds: Subject<boolean> = new Subject();
  public isLoggined$: Observable<boolean> = this.isLoggined.asObservable();
  e: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  f() {
    this.isLoggined$.subscribe(s => {
      console.log(s);
    })

    setTimeout(() => {
      this.isLoggined.next(!this.isLoggined.value);
    }, 1000);
  }

  f2() {
    this.isLoggineds.subscribe(s => {
      console.log(s);
    })

    setTimeout(() => {
      this.ff = !this.ff;
      this.isLoggineds.next(this.ff);
    }, 1000);
  }
}
