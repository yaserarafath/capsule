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
<<<<<<< HEAD
import {catchError, map} from 'rxjs/operators';
=======
>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66

@Injectable()
export class appService {
    headers: any = new Headers({ 'Accept': '*/*', 'Content-Type': 'application/json'});
    options: any = new RequestOptions({ headers: this.headers });
    updatetask: any = {};
    constructor(private http: Http, private router : Router) {
    }
    getTasks(): Observable<string[]> {
<<<<<<< HEAD
        return this.http.get(`${Config.API}/api/tasks`, this.options)
            .pipe(
                map(res => res.json()),
                catchError(this.handleErrorNoChange.bind(this))
            );
=======
        let headers = new Headers({ 'Accept': '*/*', 'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.get(Config.API+ "/api/tasks", options)
                        .map((res: Response) => res.json())
                        .catch(this.handleErrorNoChange.bind(this));
>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66
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

<<<<<<< HEAD
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
=======
    getUSers(): Observable<any> {
        const headers = new Headers({ 'Accept': '*/*', 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(`${Config.API}/api/users`, options)
            .map(res => res.json())
            .catch(this.handleErrorNoChange.bind(this))
    }

    addUser(user: User) {
        const headers = new Headers({ 'Accept': '*/*', 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        this.http.put
        return this.http.put(`${Config.API}/api/user${user.id}`, user)
            .map(res => res.json())
            .catch(this.handleErrorNoChange.bind(this));
>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66
    }

}
