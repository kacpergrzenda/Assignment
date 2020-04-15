import { Component, OnInit } from '@angular/core';
import { YearmovieService } from '../Services/yearmovie.service'

@Component({
  selector: 'app-yearmovie',
  templateUrl: './yearmovie.page.html',
  styleUrls: ['./yearmovie.page.scss'],
  
})
export class YearmoviePage implements OnInit{
  //variables
  YearMovieData:any=[];
  values = '';
  clickMessage = '';
  //method lets user input text
  onKey(event: any) { // without type info
    this.values = event.target.value;
  }
  

  //allows user to display text on screen
  onClickMe() {
    this.clickMessage = this.values;
  }


  constructor(private yearmovieService:YearmovieService) { }
//Function gets data Service from Http and stores in local array
  ngOnInit() {
    this.yearmovieService.getYearmovieData().subscribe(
      (data)=>{
        this.YearMovieData = data.Search;
      }
    );
    
    
  }
  

}
