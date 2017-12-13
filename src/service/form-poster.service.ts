import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FormPoster {

    baseUrl = 'http://localhost:3100/';

    constructor(private http: Http) {
    }

    postEmployeeForm(employee: Employee): Observable<any> {
        const url = `${this.baseUrl}postemployee`;
        const body = JSON.stringify(employee);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handlerError);
    }

    getLanguages(): Observable<any> {
        const url = `${this.baseUrl}get-languages`;

        return this.http.get(url)
            .map(this.extractLanguages)
            .catch(this.handlerError);
    }

    private extractData(resp: Response) {
        const body = resp.json();
        return body.fields || {};
    }

    private extractLanguages(resp: Response) {
        const body = resp.json();
        return body.data || {};
    }

    private handlerError(error: any) {
        console.log('Post error: ', error);
        return Observable.throw(error.statusText);
    }

}