import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]): Observable<Response> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    // return this.http.post('https://angular4-course-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers });
    return this.http.put('https://angular4-course-ng-http.firebaseio.com/data.json',
      servers,
      {headers: headers });
  }

  getServers() {
    return this.http.get('https://angular4-course-ng-http.firebaseio.com/data')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
              server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      )
  }

  getAppName() {
    return this.http.get('https://angular4-course-ng-http.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

}
