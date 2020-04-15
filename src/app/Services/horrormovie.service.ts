import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorrormovieService {

  constructor(private httpClient:HttpClient) { }
//get json data from internet and sets it to client
  getHorrormovieData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?s=horror&apikey=8ff45db0');
  }
}
