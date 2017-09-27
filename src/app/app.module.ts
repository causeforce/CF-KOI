import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { JsonpModule } from '@angular/http';
import * as $ from 'jquery';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './providers/auth.guard';
import { GetAuthSSOToken } from './home/config-service';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyDhizBSnKTGoqR3kaOZGP5OJ4fmuvCeXmM',
    authDomain: 'koi-data.firebaseapp.com',
    databaseURL: 'https://koi-data.firebaseio.com',
    projectId: 'koi-data',
    storageBucket: 'koi-data.appspot.com',
    messagingSenderId: '1036839655491'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
      AuthService,
      AuthGuard,
      GetAuthSSOToken
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
