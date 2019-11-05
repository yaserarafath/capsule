import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';  
import { Headers, RequestOptions } from '@angular/http';
import { Config } from '../env/index';
import { RouterModule , Router } from '@angular/router';
import {User} from '../userlist/user';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class appService {
    headers: any = new Headers({ 'Accept': '*/*', 'Content-Type': 'application/json'});
    options: any = new RequestOptions({ headers: this.headers });
    updatetask: any = {};
    constructor(private http: Http, private router : Router) {
    }
    getTasks(): Observable<string[]> {
        return this.http.get(`${Config.API}/api/tasks`, this.options)
            .pipe(
                map(res => res.json()),
                catchError(this.handleErrorNoChange.bind(this))
            );
    }

    addTask(inputParam: {}): Observable<string[]> {
        return this.http.post(Config.API+ "api/tasks", inputParam, this.options)
                        .map((res: Response) => res.json())
                        .catch(this.handleErrorNoChange.bind(this));
    }

    editTask(inputParam: {}, taskId : string): Observable<string[]> {
        return this.http.put(Config.API+ "api/tasks/" + taskId, inputParam, this.options)
                        .map((res: Response) => res.json())
                        .catch(this.handleErrorNoChange.bind(this));
    }

    deleteTask(taskId : string): Observable<string[]> {
        return this.http.delete(Config.API+ "api/tasks/"+ taskId, this.options)
                        .map((res: Response) => res.json())
                        .catch(this.handleErrorNoChange.bind(this));
    }

    private handleErrorNoChange (error: any) {
        const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log('Error handleErrorNoChange kytpp-service: ' + error);
        return Observable.throw(errMsg);
    }

    getUsers(): Observable<any> {
        return this.http.get(`${Config.API}/api/users`, this.options)
            .pipe(
                map(res => res.json()),
                catchError(this.handleErrorNoChange.bind(this))
            );
    }

    getUser(): Observable<any> {
        return this.http.get(`${Config.API}/api/users`, this.options)
            .pipe(
                map(res => res.json()),
                catchError(this.handleErrorNoChange.bind(this))
            );
    }

    addUser(user: User) {
        return this.http.post(`${Config.API}/api/users/add`, JSON.stringify(user), this.options)
            .pipe(
                map(res => res.json()),
                catchError(this.handleErrorNoChange.bind(this))
            );
    }

}
