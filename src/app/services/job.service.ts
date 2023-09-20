import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ResponseJobs } from '../models/responseJobs.model';
import { Job } from '../models/Job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}jobs`;



  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllJobs(): Observable<ResponseJobs> {
    return this.httpClient.get<ResponseJobs>(this.apiUrl);
  }

  public getJobById(id: number): Observable<Job> {
    return this.httpClient.get<Job>(`${this.apiUrl}/${id}`);
  }
}
