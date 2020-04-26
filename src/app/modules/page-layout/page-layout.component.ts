import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.less']
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
    },
    {
      text: 'auth',
      url: '/auth'
    },
    {
      text: 'sign in',
      url: '/auth/sign-in'
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
