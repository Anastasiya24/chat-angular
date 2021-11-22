import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import getUserIdService from 'src/services/getUserId.service';

import { UserService } from 'src/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isUserExist = getUserIdService();

    if (state.url === '/' && !isUserExist) {
      this.router.navigate(['/greeting']);
      return false;
    }
    if (state.url === '/greeting' && isUserExist) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
