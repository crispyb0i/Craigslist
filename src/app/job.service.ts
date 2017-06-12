import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { JOBS } from './mock-jobs';

@Injectable()
export class JobService {

  constructor() { }

  getJobs() {
    return JOBS;
  }

  getJobObject(id:number){
    for (var i=0; i < JOBS.length; i++) {
      if(JOBS[i].id === id) {
        return JOBS[i];
      }
    }
  }

  deleteJobObject(jobObject){
    for(var i=0;i<JOBS.length;i++){
      if(jobObject===JOBS[i]){
        var test = JOBS.splice(i,1);
      }
    }
  }

  // getJobObject(id:number){
  //   JOBS.forEach((job: Job) => {
  //     if(job.id===id){
  //       return job;
  //     }
  //   })
  // }
}
