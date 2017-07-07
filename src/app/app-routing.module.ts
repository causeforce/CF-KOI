import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';

import { AuthService } from './providers/auth.service';
import { AuthGuard } from './providers/auth.guard';
import { GetAuthSSOToken } from './home/config-service';

const appRoutes: Routes = [
    { path: 'app-home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
