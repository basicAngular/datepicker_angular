import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>(['the intial goals', 'another life goals']);
  goal = this.goals.asObservable();
  constructor() { }
  changeGoal() {
    this.goals.next(this.goal);
  }
}
