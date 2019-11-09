import {Component, OnInit, Inject, ViewEncapsulation, OnDestroy, ViewChild, Input} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable, Subject, merge} from 'rxjs';
import { appService } from '../service/app.service'; 
import { User } from './user';
import {concatMap} from 'rxjs/operators';


@Component({
    selector: "add-user-component",
    templateUrl: "./add-user.component.html"
})
export class AddUserComponent implements OnInit {
    userForm: FormGroup;
    users: User;

    constructor(private fb: FormBuilder, private readonly appservice: appService) {
    }
    ngOnInit(): void {
        this.initForm();
    }
    submitForm(): void {
        console.log(this.userForm.value);
        this.appservice.addUser(this.userForm.value).pipe(
            concatMap(() => this.getUsers())
        ).subscribe(data => { this.users = data });
    }
    getUsers() {
        return this.appservice.getUsers();
    }
    resetForm(): void {
        this.initForm();
    }
    initForm(): void {
        this.userForm = this.fb.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'id': ['', Validators.required]
        });
    }
}

