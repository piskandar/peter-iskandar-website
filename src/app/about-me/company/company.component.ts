import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input() company: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() location: string;

  constructor() {
  }

  ngOnInit() {
  }

}
