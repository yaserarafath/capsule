import { Component, OnInit, Inject, ViewEncapsulation, OnDestroy, ViewChild } from '@angular/core';
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

    constructor(private readonly appservice: appService){

    }

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers(): void {
        this.appservice.getUSers()
            .subscribe(users => {
                this.users = users;
            });
    }
}