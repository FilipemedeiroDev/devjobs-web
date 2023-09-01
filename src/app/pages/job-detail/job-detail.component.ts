import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Job } from 'src/app/models/Job.model';

import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent {

  job?: Job;

  constructor (private jobService: JobService, private route: ActivatedRoute) {
    this.getJobDetail();
  }

  getJobDetail() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.jobService.getJobById(id).subscribe((job) => (this.job) = job);
  }
}
