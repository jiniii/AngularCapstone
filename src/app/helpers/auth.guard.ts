import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '../services/account.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    user: any;
    isUserLogged: boolean = false;
    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.user = localStorage.getItem("email");
        if (this.user != null) {
            this.isUserLogged = true;
            return true;
        } else {
            // not logged in so redirect to login page with the return url
            this.isUserLogged = false;
            this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }




    }
}