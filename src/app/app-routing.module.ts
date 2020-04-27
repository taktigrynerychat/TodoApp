import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {SignInComponent} from './modules/auth/components/sign-in/sign-in.component';
import {SignUpComponent} from './modules/auth/components/sign-up/sign-up.component';
import {AuthComponent} from './modules/auth/auth.component';
import {AuthGuard} from "./helpers/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  // {
  //   path: 'auth', component: AuthComponent, pathMatch: 'full', children: [
  //     {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  //     {path: 'sign-in', component: SignInComponent, pathMatch: 'full'},
  //     {path: 'sign-up', component: SignUpComponent, pathMatch: 'full'},
  //   ]
  // }
  {
    path: 'auth', component: AuthComponent, children: [
      {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
