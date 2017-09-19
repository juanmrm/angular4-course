export class CounterService {

  inactive: number;
  active: number;

  constructor() {
    this.active = 0;
    this.inactive = 0;
  }

  incrementInactive() {
    this.inactive++;
  }

  incrementActive() {
    this.active++;
  }

}
