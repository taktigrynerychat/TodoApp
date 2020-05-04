import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from './modules/auth/auth.module';
import {HistoryModule} from './modules/history/history.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    AuthModule,
    HistoryModule,
    environment.production ? [] : AkitaNgDevtools,
    AkitaNgRouterStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
