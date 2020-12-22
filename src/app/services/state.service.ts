import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private usernameSource = new BehaviorSubject<string>('Jack and Jill');
  username = this.usernameSource.asObservable()
  constructor() { }

  changeUsername(username: string) {
    this.usernameSource.next(username);
  }
}
