import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = 'http://localhost:8000/companies';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCompanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.apiUrl}/${id}`);
  }
}
