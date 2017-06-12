import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job.model';
import { Location } from '@angular/common';
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

  constructor(private jobService:JobService, private location: Location) { }

  ngOnInit() {
  }

  deleteJob(jobObject){
    this.jobService.deleteJobObject(jobObject);
  }

  favBgColor(jobObject) {
    if (jobObject.favorite === true) {
      return 'bg-danger';
    }
  }

  favJob(jobObject){
    console.log(jobObject)
    jobObject.favorite=!jobObject.favorite;
    console.log(jobObject.favorite)
  }
}
