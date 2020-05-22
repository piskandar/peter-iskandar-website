import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() showCode = true;
  @Input() showMusic = true;
  @Input() showAbout = true;
  @Input() pageTitle: string;
  constructor() {
  }

  ngOnInit() {
  }

}
