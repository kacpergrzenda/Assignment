import { Component, OnInit } from '@angular/core';
import { ComedymovieService } from '../Services/comedymovie.service'

@Component({
  selector: 'app-comedymovie',
  templateUrl: './comedymovie.page.html',
  styleUrls: ['./comedymovie.page.scss'],
})
export class ComedymoviePage implements OnInit {
  //variiable
 ComedyMovieData:any=[];
 //constructor
  constructor(private comedymovieService:ComedymovieService) { }

  //Function gets data Service from Http and stores in local array
  ngOnInit() {
    this.comedymovieService.getComdeymovieData().subscribe(
      (data)=>{
        this.ComedyMovieData = data.Search;
      }
    );
    
    
  }

}
