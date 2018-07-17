import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeopleServiceService {

  constructor(private http: HttpClient) { }
  private _url: string = '/assets/data/people.json';

  posts: Observable<any[]>;

  getPeople(): Observable<any[]>{
  	return this.http.get<any[]>(this._url);
  }

}
