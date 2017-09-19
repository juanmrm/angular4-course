import { Component, OnInit} from '@angular/core';
import { UsersService } from './shared/users.service';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UsersService, CounterService ]
})
export class AppComponent implements OnInit {

  activeUsers: Array<string>;
  inactiveUsers: Array<string>

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

  getActiveUsersCount() {
    return this.counterService.active;
  }

  getInactiveUsersCount() {
    return this.counterService.inactive;
  }

}
