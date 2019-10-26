import { Component, OnInit, Inject, ViewEncapsulation, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable, Subject, merge} from 'rxjs';
import { appService } from '../service/app.service'; 
import { User } from './user';


@Component({
    selector: "add-user-component",
    templateUrl: "./add-user.component.html"
})
export class AddUserComponent implements OnInit {
    userForm: FormGroup;
    user: User;
    constructor(private fb: FormBuilder) {

    }
    ngOnInit(): void {
        this.userForm = this.fb.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'id': ['', Validators.required]
        })
        this.userForm.valueChanges.subscribe(console.log)
    }

}