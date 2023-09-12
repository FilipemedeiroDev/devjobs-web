import { inject } from '@angular/core';

import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
  ): Observable<boolean > | boolean => {

    const router = inject(Router);

   router.navigate(['login'])
   return false;
};
