import { Component, OnInit } from '@angular/core';
import { CrimemovieService } from '../Services/crimemovie.service'

@Component({
  selector: 'app-crimemovie',
  templateUrl: './crimemovie.page.html',
  styleUrls: ['./crimemovie.page.scss'],
})
export class CrimemoviePage implements OnInit {
  //variables
  CrimeMovieData:any=[];
  //constructor
  constructor(private crimemovieService:CrimemovieService) { }

  //Function gets data Service from Http and stores in local array
  ngOnInit() {
    this.crimemovieService.getCrimemovieData().subscribe(
      (data)=>{
        this.CrimeMovieData = data.Search;
      }
    );
    
    
  }

}
