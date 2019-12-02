import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '../base-http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
        return this.http
            .get<any>(this.baseUrl + 'api/All/testcall')
            .pipe(map(this.dummyPipe));
    }

    getfirstall(): Observable<any> {
        return this.http
            .get<any>(this.baseUrl + 'api/All/getfirstall')
            .pipe(map(this.dummyPipe));
    }

}
