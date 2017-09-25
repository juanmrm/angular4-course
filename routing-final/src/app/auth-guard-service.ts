import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  //Puede funcionar asincronamente (retornando Observable o Promise) o sincronamente.
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot,): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isAuthenticated()
      .then(
        (authenciated: boolean) => {
          if(authenciated) {
            return true
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot,): Observable<boolean> | Promise<boolean> | boolean {

    return this.canActivate(route, state);
  }

}
