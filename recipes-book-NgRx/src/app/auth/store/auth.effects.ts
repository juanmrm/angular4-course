import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import * as firebase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    // Solo en el caso de no emitamos nuevas acciones
    // @Effect({dispatch: false})
    @Effect() // Indicamos con este decorartor que debe ser tratado por ngrx/effects
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP) // Solo atendemos a este tipo de action
        .map((action: AuthActions.TrySignup) => {
            return action.payload;
        })
        .switchMap((authData: { username: string, password: string}) => {
            return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        })
        .switchMap(() => {
            return fromPromise(firebase.auth().currentUser.getIdToken());
        })
        .mergeMap((token: string) => { // Merge into Observables. Estamos devolviendo en este caso 2 Observables
            return [ // Dispatch new Actions
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        });

    @Effect()
    authSigin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .map((action: AuthActions.TrySignin) => {
            return action.payload;
        })
        .switchMap((authData: { username: string, password: string}) => {
           return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        })
        .switchMap(() => {
            return fromPromise(firebase.auth().currentUser.getIdToken());
        })
        .mergeMap((token: string) => { // Merge into Observables. Estamos devolviendo en este caso 2 Observables
            this.router.navigate(['/']);
            return [ // Dispatch new Actions
                {
                    type: AuthActions.SIGNIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        });

    @Effect({ dispatch: false })
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .switchMap(() => {
            return fromPromise(firebase.auth().signOut());
        })
        .do(() => {
            this.router.navigate(['/']);
        });

    constructor(private actions$: Actions,
                private router: Router) {} // Nos inyecta el action automaticamente ngrx/effects
}
