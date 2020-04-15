import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class YearmovieService {


  constructor(private httpClient:HttpClient) { }


  //get json data from internet and sets it to client
  getYearmovieData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?s=love&y=2020&apikey=8ff45db0');
  }
}
