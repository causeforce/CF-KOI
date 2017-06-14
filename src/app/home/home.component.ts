import { Component } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { AuthService } from '../providers/auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    
    email: string;
    password: string;
    data;

    constructor(public authService: AuthService,
                private http:Http) {
                this.http.get('https://crossorigin.me/http://causeforce.com/koi/koi_report.html').subscribe(res => this.data = res.json());
    }

    signup() {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
    }

    login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
    }

    logout() {
    this.authService.logout();
    }
    
    private testUrl = 'http://http://causeforce.com/koi/koi_report.html';
    
}
