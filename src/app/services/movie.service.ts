import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private $http: HttpClient) {

  }

  GetData(): Observable<any> {
    return this.$http.get<Movie[]>('https://api.themoviedb.org/3/discover/movie?api_key=1f8585fd5daf4a3c0941bfb37c99b92f');
}

GetData2(): Observable<any> {
    return this.$http.get<Movie[]>('https://api.themoviedb.org/3/discover/movie?primary_release_year=2020&api_key=1f8585fd5daf4a3c0941bfb37c99b92f');
}
}
