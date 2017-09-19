import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {

  activeUsers: Array<string>;
  inactiveUsers: Array<string>

  constructor(private counterService: CounterService) {
    this.activeUsers = ['Max', 'Anna'];
    this.inactiveUsers = ['Chris', 'Manu'];
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementActive()
  }

}
