import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FormPoster {

    constructor(private http: Http) {
    }

    postEmployeeForm(employee: Employee): Observable<any> {
        let url = 'http://localhost:3100/postemployee';
        let body = JSON.stringify(employee);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handlerError);
    }

    extractData(resp: Response) {
        let body = resp.json();
        return body.fields || {};
    }

    handlerError(error: any) {
        console.log('Post error: ', error);
        return Observable.throw(error.statusText);
    }
}