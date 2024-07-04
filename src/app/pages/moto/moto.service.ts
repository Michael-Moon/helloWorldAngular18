import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MotoService {

  constructor(private http: HttpClient) { }

  private url: string  = "http://localhost:8080"

  all() : Observable<any>{

    return this.http.get<any>(this.url +"/motorcycle").pipe(map( response =>{
      return response;
    }) );
  }


}
