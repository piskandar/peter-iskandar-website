import {Component, OnInit} from '@angular/core';
import {workExperienceList1, workExperienceList2, WorkExperienceRole} from '../model/work-experience-role';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  workExperience1: WorkExperienceRole[];
  workExperience2: WorkExperienceRole[];

  constructor() {
    this.workExperience1 = workExperienceList1;
    this.workExperience2 = workExperienceList2;
  }

  ngOnInit() {
  }

}
