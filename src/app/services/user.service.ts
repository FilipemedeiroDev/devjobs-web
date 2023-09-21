import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ResponseLogin } from '../models/responseLogin.model';
import { ResponseRegister } from '../models/responseRegister.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public login(loginForm: FormGroup): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(`${this.baseApiUrl}login`, loginForm)
  }

  public register(registerForm: FormGroup): Observable<ResponseRegister> {
    return this.http.post<ResponseRegister>(`${this.baseApiUrl}users`, registerForm);
  }
}
