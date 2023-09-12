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

filter: string = '';


constructor (
  public jobService: JobService
) {
  this.getJobs();
}

ngOnInit(): void {

}


getJobs() {
  return this.jobService.getAllJobs().subscribe(data => {
      this.listJobs = data.jobs;
  });
}

filteredJobs() {

  if (this.listJobs?.length === 0 || this.filter === undefined
  || this.filter.trim() === '') {
    return this.listJobs;
  }

  const splitted = this.filter.split(' ');

    return this.listJobs?.filter(job => {


    return splitted.every(predicate => {
      return job.headline.toLocaleLowerCase().includes(predicate.toLocaleLowerCase())
      || job.description.toLocaleLowerCase().includes(predicate.toLocaleLowerCase())
    })
  });
}
}
