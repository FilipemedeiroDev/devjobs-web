import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";
import { ToastService } from "angular-toastify";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements  HttpInterceptor {

  constructor(private router: Router, private _toastService: ToastService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(error => {
      if(error.status === 401 && error.error.message === 'invalid email or password') {
        this._toastService.error('email ou senha inválidos')
      }

      return throwError(() => error)
    }))
  }
}
