import { Component, OnInit } from '@angular/core';
import { HorrormovieService } from '../Services/horrormovie.service'

@Component({
  selector: 'app-horrormovie',
  templateUrl: './horrormovie.page.html',
  styleUrls: ['./horrormovie.page.scss'],
})
export class HorrormoviePage implements OnInit {
  //variables
  HorrorMovieData:any=[];
  //constructor
  constructor(private horrormovieService:HorrormovieService) { }

  //Function gets data Service from Http and stores in local array
  ngOnInit() {
    this.horrormovieService.getHorrormovieData().subscribe(
      (data)=>{
        this.HorrorMovieData = data.Search;
      }
    );
    
    
  }
}
