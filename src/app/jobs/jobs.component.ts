import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  providers: [JobService]
})

export class JobsComponent implements OnInit {
  jobList: Job[] = [];
  constructor(private jobService:JobService, private router:Router) { }

  ngOnInit() {
    this.jobList = this.jobService.getJobs();
  }

  goToJobDetailPage(clickedJob: Job){
    this.router.navigate(['jobs', clickedJob.id])
  }
}
