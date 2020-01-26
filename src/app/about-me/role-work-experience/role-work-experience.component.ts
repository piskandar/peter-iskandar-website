import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-role-work-experience',
  templateUrl: './role-work-experience.component.html',
  styleUrls: ['./role-work-experience.component.scss']
})
export class RoleWorkExperienceComponent implements OnInit {

  @Input() roleTitle: string;
  @Input() businessUnit: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() description: string[];

  constructor() { }

  ngOnInit() {
  }

}
