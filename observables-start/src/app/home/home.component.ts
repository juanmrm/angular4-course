import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubscription: Subscription;
  customObservable: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);

    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package'); // Pushes the next data package
      }, 2000);
      setTimeout(() => {
        observer.next('second package'); // Pushes the next data package
      }, 3000);
      // setTimeout(() => {
      //   observer.error('this does not work'); // Fails with this message
      // }, 4000);
      setTimeout(() => {
        observer.complete(); // Complete. We won't see this if something before these complete fails.
      }, 5000);
      setTimeout(() => {
        observer.next('third package'); // We will never recibe this package because it's completed.
      }, 6000);
    });

    this.customObservable = myObservable.subscribe(
      (data: string) => { console.log(data) },
      (error: string) => { console.log(error) },
      () => { console.log('completed') },
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObservable.unsubscribe();
  }

}
