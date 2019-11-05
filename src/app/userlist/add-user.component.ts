import { Component, OnInit, Inject, ViewEncapsulation, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable, Subject, merge} from 'rxjs';
import { appService } from '../service/app.service'; 
import { User } from './user';
<<<<<<< HEAD
import {concatMap} from 'rxjs/operators';
=======
>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66


@Component({
    selector: "add-user-component",
    templateUrl: "./add-user.component.html"
})
export class AddUserComponent implements OnInit {
    userForm: FormGroup;
    user: User;
<<<<<<< HEAD
    userList;
    constructor(private fb: FormBuilder, private readonly appservice: appService) {

    }
    ngOnInit(): void {
        this.initForm();
    }
    submitForm(): void {
        console.log(this.userForm.value);
        this.appservice.addUser(this.userForm.value).pipe(
            concatMap(() => this.getUsers())
        ).subscribe(console.log);
    }
    getUsers() {
        return this.appservice.getUsers();
    }
    resetForm(): void {
        this.initForm();
    }
    initForm(): void {
=======
    constructor(private fb: FormBuilder) {

    }
    ngOnInit(): void {
>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66
        this.userForm = this.fb.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'id': ['', Validators.required]
<<<<<<< HEAD
        });
    }
}
=======
        })
        this.userForm.valueChanges.subscribe(console.log)
    }

}
>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66
