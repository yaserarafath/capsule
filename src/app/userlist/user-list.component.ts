<<<<<<< HEAD
import {Component, OnInit, Inject, ViewEncapsulation, OnDestroy, ViewChild, Input} from '@angular/core';
=======
import { Component, OnInit, Inject, ViewEncapsulation, OnDestroy, ViewChild } from '@angular/core';
>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable, Subject, merge} from 'rxjs';
import { User } from './user';
import { appService } from '../service';


@Component({
    selector: "user-list",
    templateUrl: "./user-list.component.html"
})
export class UserListComponent implements OnInit {
    users: User[];
<<<<<<< HEAD
    @Input()
    userList: User[];
=======

>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66
    constructor(private readonly appservice: appService){

    }

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers(): void {
<<<<<<< HEAD
        this.appservice.getUsers()
=======
        this.appservice.getUSers()
>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66
            .subscribe(users => {
                this.users = users;
            });
    }
}