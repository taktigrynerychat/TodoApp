import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input()
  headerData;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    const headerNav: Element = document.querySelectorAll('.app-header__nav')[0];
    const body: Element = document.querySelectorAll('body')[0];
    const headerBurgerBtn: Element = document.querySelectorAll('.app-header__icon-wrapper')[0];
    const burgerIcon: Element = document.getElementById('nav-icon1');
    headerBurgerBtn.addEventListener('click', () => {
      headerNav.classList.toggle('_active');
      burgerIcon.classList.toggle('open');
    });
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

}
