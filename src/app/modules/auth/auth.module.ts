import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';


@NgModule({
  declarations: [AuthComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule {
}
