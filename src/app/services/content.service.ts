import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const baseUrl:string = 'http://www.omdbapi.com/?apikey=5e3b7cb5'

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http:HttpClient) { }

  search(searchTerm: string): Observable<any>
  {
    return this.http.get(baseUrl, {params: {s: searchTerm }});
  }

  getDetails(imdbID: string): Observable<any>
  {
    return this.http.get(baseUrl, {params: {i: imdbID }});
  }
}
