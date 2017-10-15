import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromApp from '../store/app.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private store: Store<fromApp.AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted!', req);
        return this.store.select('auth')
            .take(1)
            .switchMap((authState: fromAuth.State) => { // Aqui estamos usando switchMap porque Map no nos serviria
                const copiedReq = req.clone({ params: req.params.set('auth', authState.token) });
                return next.handle(copiedReq); // Let it continue
            });
    }
}
