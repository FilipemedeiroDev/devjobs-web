import { inject } from '@angular/core';

import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';


export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ): Observable<boolean > | boolean => {
    const tokenAuth  = localStorage.getItem("token");
    const router = inject(Router);

    if(tokenAuth) {
      return true
    }

   router.navigate(['login'])
   return false;
};
