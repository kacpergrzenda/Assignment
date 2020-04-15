import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComedymovieService {

  constructor(private httpClient:HttpClient) { }

  getComdeymovieData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?s=comedy&apikey=8ff45db0');
  }
}
