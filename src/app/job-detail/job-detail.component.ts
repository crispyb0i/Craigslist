import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
  providers: [JobService]
})
export class JobDetailComponent implements OnInit {
  jobId: number;
  jobObject: Job;
  constructor(private route: ActivatedRoute, private location: Location, private jobService: JobService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.jobId = parseInt(urlParameters['id']);
    });
    this.jobObject = this.jobService.getJobObject(this.jobId);
  }

}
