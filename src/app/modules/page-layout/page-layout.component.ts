import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.less']
})
export class PageLayoutComponent implements OnInit {

  headerData = [
    {
      text: 'send',
      url: '/main'
    },
    {
      text: 'open map',
      url: '/'
    },
    {
      text: 'profile',
      url: '/'
    },
    {
      text: 'contacts',
      url: '/'
    },
    {
      text: 'about',
      url: '/'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
