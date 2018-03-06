import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../auth/auth.service";
import { DataService } from './../data.service';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material';

import * as $ from 'jquery';

@Component({
    selector: 'all-tables',
    templateUrl: './alltables.component.html',
    styleUrls: ['./alltables.component.scss']
})
export class AllTablesComponent implements OnInit {
    myForm: FormGroup;
    data: any;
    private apiUrl = '/api/data';

    constructor(private router: Router, private http: HttpClient, private authService: AuthService, private dataService: DataService) {

        // this.getData('/api/data');

        $(document).ready(function(){
            $('.btn-view').on('click', function() {
                $('.all-buttons-row').slideToggle();
                $(this).toggleClass('view-hide');
                if ($(this).hasClass('view-hide')) {
                    $(this).text('Hide Table Menu');
                } else {
                    $(this).text('View Table Menu');
                }
            });

            $('.btn').on('click', function(){
               if ($(this).hasClass('alberta-btn')){
                   $('.ab-table').siblings('.table-responsive').slideUp();
                   $('.ab-table').slideDown();
                   $('.all-buttons-row').slideUp();
                   $('.btn-view').removeClass('view-hide');
                   $('.btn-view').text('View Table Menu');
               } else if ($(this).hasClass('toronto-btn')){
                   $('.to-table').siblings('.table-responsive').slideUp();
                   $('.to-table').slideDown();
                   $('.all-buttons-row').slideUp();
                   $('.btn-view').removeClass('view-hide');
                   $('.btn-view').text('View Table Menu');
               } else if ($(this).hasClass('vancouver-btn')){
                   $('.va-table').siblings('.table-responsive').slideUp();
                   $('.va-table').slideDown();
                   $('.all-buttons-row').slideUp();
                   $('.btn-view').removeClass('view-hide');
                   $('.btn-view').text('View Table Menu');
               } else if ($(this).hasClass('montreal-btn')){
                   $('.mo-table').siblings('.table-responsive').slideUp();
                   $('.mo-table').slideDown();
                   $('.all-buttons-row').slideUp();
                   $('.btn-view').removeClass('view-hide');
                   $('.btn-view').text('View Table Menu');
               } else if ($(this).hasClass('ow-toronto-btn')){
                   $('.ow-to-table').siblings('.table-responsive').slideUp();
                   $('.ow-to-table').slideDown();
                   $('.all-buttons-row').slideUp();
                   $('.btn-view').removeClass('view-hide');
                   $('.btn-view').text('View Table Menu');
               } else if ($(this).hasClass('perth-btn')){
                   $('.pr-table').siblings('.table-responsive').slideUp();
                   $('.pr-table').slideDown();$('.all-buttons-row').slideUp();
                   $('.btn-view').removeClass('view-hide');
                   $('.btn-view').text('View Table Menu');
               } else if ($(this).hasClass('melbourne-btn')){
                   $('.ml-table').siblings('.table-responsive').slideUp();
                   $('.ml-table').slideDown();
                   $('.all-buttons-row').slideUp();
                   $('.btn-view').removeClass('view-hide');
                   $('.btn-view').text('View Table Menu');
               } else if ($(this).hasClass('brisbane-btn')){
                   $('.br-table').siblings('.table-responsive').slideUp();
                   $('.br-table').slideDown();
                   $('.all-buttons-row').slideUp();
                   $('.btn-view').removeClass('view-hide');
                   $('.btn-view').text('View Table Menu');
               } else if ($(this).hasClass('all-btn')){
                   $('.all-table').siblings('.table-responsive').slideUp();
                   $('.all-table').slideDown();
                   $('.all-buttons-row').slideUp();
                   $('.btn-view').removeClass('view-hide');
                   $('.btn-view').text('View Table Menu');
               } 
            });
        });
        // if (window.location.href.indexOf('alltables') == -1) {
        //      location.reload(true);
        // }
    }

    ngOnInit() {
      this.dataService.fetchData();
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}