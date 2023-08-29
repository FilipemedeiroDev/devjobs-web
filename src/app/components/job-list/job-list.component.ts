import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/Job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit{

  listJobs?: Job[];

constructor (
  public jobService: JobService
) {}

ngOnInit(): void {
  this.getJobs();
}


getJobs() {
  return this.jobService.getAllJobs().subscribe(data => {
      this.listJobs = data.jobs;
  });
}

}
