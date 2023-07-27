import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) {}
    baseurl="https://api.themoviedb.org/3";
    apiKey='1dd2f814fe601c6c852707474595e23f';
    // bannerApiData
    bannerApiData():Observable<any>{
      return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}`)
    }
    //trendingMovieApiData
    trendingMovieApiData():Observable<any>{
      return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`)
    }
    getSearchMovie(data:any):Observable<any>{
      return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`)
    }
    getMovieDetails(data:any):Observable<any>{
      return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apiKey}`)

    }
    getMovieVideo(data:any):Observable<any>{
      return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`)

    }
    getMovieCast(data:any):Observable<any>{
      return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`)

    }
    //action movie
    getActionMovieData():Observable<any>{
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=28`)
    }
    //adventure movie
    getAdventureMovieData():Observable<any>{
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=12`)
    }
    //animation movie
    getAnimationMovieData():Observable<any>{
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=16`)
    }
    //comedy movie
    getComedyMovieData():Observable<any>{
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=35`)
    }
    //documentary
    getDocumentaryMovieData():Observable<any>{
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=99`)
    }

  
}
