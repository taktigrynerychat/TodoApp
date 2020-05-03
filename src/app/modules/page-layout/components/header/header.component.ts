import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserInfoModel} from '../../../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input()
  headerData;
  user: UserInfoModel;
  picName: string;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.init();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.picName = this.user.name.split(' ').map(word => word[0]).join('');
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

  signOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    this.navigateTo('/auth');
  }

}
