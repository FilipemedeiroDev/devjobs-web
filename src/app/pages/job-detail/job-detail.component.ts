import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Job } from 'src/app/models/Job.model';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

import { JobService } from 'src/app/services/job.service';



@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent {

  job?: Job;
  company?: Company;

  constructor (private jobService: JobService, private companyService: CompanyService, private route: ActivatedRoute) {
    this.getJobDetail();
  }

  getJobDetail() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.jobService.getJobById(id).subscribe((job) => {
      this.job = job;
      this.getCompanyDetail(job.company_id);
    });
  }

  getCompanyDetail(companyId: number) {
    this.companyService.getCompanyById(companyId).subscribe((company) => (this.company) = company);
  }
}
