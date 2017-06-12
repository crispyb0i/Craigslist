import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { JOBS } from './mock-jobs';

@Injectable()
export class JobService {

  constructor() { }

  getJobs() {
    return JOBS;
  }


}
