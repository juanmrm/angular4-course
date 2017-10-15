import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<fromApp.AppState>,
                private router: Router) { }

    canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.select('auth')
            .take(1)
            .map(
            (authState: fromAuth.State) => {
                if (!authState.authenticated) {
                    this.router.navigate(['signin']);
                    return false;
                } else {
                    return true;
                }
            }
        );
    }
}
