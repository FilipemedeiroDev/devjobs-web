import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseJobs } from '../models/responseJobs.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  apiUrl = 'http://localhost:8000/jobs';


  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllJobs(): Observable<ResponseJobs> {
    return this.httpClient.get<ResponseJobs>(this.apiUrl);
  }
}
