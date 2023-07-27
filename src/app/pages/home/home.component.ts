import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private service:MovieApiServiceService){}
  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentaryMovieResult:any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
    this.actionMovieData();
    this.adventureMovieData();
    this.comedyMovieData();
    this.animationMovieData();
    this.documentaryMovieData();
  }
  bannerData(){
   this.service.bannerApiData().subscribe((result)=>{
    console.log(result,"bannerResult");
    this.bannerResult = result.results;
   })
  }
  trendingMovieData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,"trendingMovieData");
      this.trendingMovieResult = result.results;
    })
  }
  actionMovieData(){
    this.service.getActionMovieData().subscribe((result)=>{
      console.log(result,'actionMovieResult');
      this.actionMovieResult = result.results;
    })
  }
  adventureMovieData(){
    this.service.getAdventureMovieData().subscribe((result)=>{
      console.log(result,'adventureMovieResult');
      this.adventureMovieResult = result.results;
    })
  }
  comedyMovieData(){
    this.service.getComedyMovieData().subscribe((result)=>{
      console.log(result,'comdyMovieData');
      this.comedyMovieResult = result.results;
    })
  }
  animationMovieData(){
    this.service.getAnimationMovieData().subscribe((result)=>{
      console.log(result,'animationMovieData');
      this.animationMovieResult = result.results;
    })
  }
  documentaryMovieData(){
    this.service.getDocumentaryMovieData().subscribe((result)=>{
      console.log(result,'documentaryMovieData');
      this.documentaryMovieResult = result.results;
    })
  }
  
  

}
