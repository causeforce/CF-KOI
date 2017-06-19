import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { ConfigurationService } from './home/config-service';


const appRoutes: Routes = [
    { path: 'app-home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full'}
];

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AuthService,
      AuthGuard,
      ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
