import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}companies`;


  constructor(
    private httpClient: HttpClient
  ) { }

  public getCompanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.apiUrl}/${id}`);
  }
}
