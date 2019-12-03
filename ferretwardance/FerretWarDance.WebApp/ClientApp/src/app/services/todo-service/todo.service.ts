import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '../base-http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "../../../environments/environment.prod";

class TodoServiceMap {
    protected dummyPipe(response: any): any {
        return response;
    }
}

class TodoServiceLogic extends TodoServiceMap {

}

@Injectable()
export class TodoService extends TodoServiceLogic {

    constructor(
        private base: BaseHttpService, 
        private http: HttpClient, 
        @Inject('BASE_URL') private baseUrl: string) {
        super();
    }

    testCall(): Observable<any> {
        if (environment.isMock) {
            return this.mockTestCall().pipe(map(this.dummyPipe));
        }
        return this.http
            .get<any>(this.baseUrl + 'api/All/testcall')
            .pipe(map(this.dummyPipe));
    }

    mockTestCall(): Observable<any> {
        return new Observable((observer) => {
            observer.next("mockTestCall success.");
            observer.complete();
        });
    }


    getfirstall(): Observable<any> {
        if (environment.isMock) {
            return this.mockGetFirstAll().pipe(map(this.dummyPipe));
        }
        return this.http
            .get<any>(this.baseUrl + 'api/All/getfirstall')
            .pipe(map(this.dummyPipe));
    }

    mockGetFirstAll(): Observable<any> {
        return new Observable((observer) => {
            observer.next({});
            observer.complete();
        });
    }


    save(todoWrap: any): Observable<any> {
        if (environment.isMock) {
            return this.mockSave().pipe(map(this.dummyPipe));
        }
        return this.http
            .post<any>(this.baseUrl + 'api/All/save', todoWrap)
            .pipe(map(this.dummyPipe));
    }

    mockSave(): Observable<any> {
        return new Observable((observer) => {
            observer.next(true);
            observer.complete();
        });
    }

}
