import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model'
import { JOBS } from '../mock-jobs'

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  submitNewJob(title:string, description:string, compensation:string, id){
    var jobId = parseInt(id)
    var newJob = new Job(title,description,compensation,jobId);
    JOBS.push(newJob);
    console.log(JOBS)
  }
}
