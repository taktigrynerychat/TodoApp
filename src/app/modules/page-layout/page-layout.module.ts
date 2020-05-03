import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageLayoutComponent} from './page-layout.component';
import { HeaderComponent } from './components/header/header.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [PageLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule
  ], exports: [PageLayoutComponent]
})
export class PageLayoutModule {
}
