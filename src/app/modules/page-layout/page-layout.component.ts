import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLayoutComponent implements OnInit {

  headerData = [
    {
      text: 'dashboard',
      url: '/dashboard'
    },
    {
      text: 'history',
      url: '/history'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
