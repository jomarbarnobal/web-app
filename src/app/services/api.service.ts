import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw'

@Injectable()

export class ApiService {
  private _headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })

  private _postsUrl: string = 'https://blog-api-app.herokuapp.com'

  constructor(
    private _http: Http
  ){}

  private getJson(resp: Response){
    return resp.json();
  }

  private chechForError(resp: Response ): Response {
    if (resp.status >= 200 && resp.status < 300) {
      return resp;
    } else {
      const error = new Error(resp.statusText);
      error['response'] = resp;
      console.error(error);
      throw error; 
    }
  }

  // Posts API path
  get(path: string): Observable<any>{
    return this._http.get(`${this._postsUrl}${path}`, this._headers)
      .map(this.chechForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson) 
  }
}