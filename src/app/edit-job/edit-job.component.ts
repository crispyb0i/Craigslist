import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss'],
  providers: [JobService]
})
export class EditJobComponent implements OnInit {
  @Input() jobObject: Job;

  editJobShow = false;

  constructor(private jobService:JobService) { }

  ngOnInit() {
  }

  deleteJob(jobObject){
    this.jobService.deleteJobObject(jobObject);
  }
}
