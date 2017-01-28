import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class ApiService{

  private _header = new Headers({
    'Content-Type': 'application/json',
    'Accept':       'application/json'
  })

  private _baseUrl: string = 'https://blog-api-app.herokuapp.com'
  // private _baseUrl: string = 'http://localhost:3000'
  
  constructor(private _http: Http){}
  
  private getJson(res: Response){
    return res.json()
  }
  private _checkForError(res: Response): Response {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      const error = new Error(res.statusText);
      error['response'] = res;
      console.error(error);
      throw error;
    }
  }

  get(path: string): Observable<any>{
    return this._http.get(`${this._baseUrl}${path}`, this._header)
      .map(this._checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson)
  }

  post(path, body): Observable<any>{
    return this._http.post(`${this._baseUrl}${path}`,
       JSON.stringify(body), { headers: this._header})
      .map(this._checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson)
  }

   delete(path: string): Observable<any>{
    return this._http.delete(`${this._baseUrl}${path}`, this._header)
      .map(this._checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson)
  }

}