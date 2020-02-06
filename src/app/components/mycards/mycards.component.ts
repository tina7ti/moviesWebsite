import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-mycards',
  templateUrl: './mycards.component.html',
  styleUrls: ['./mycards.component.scss']
})
export class MycardsComponent implements OnInit {

  movies: Movie[];
  @Input() typeService:number =1 ;

  constructor(private $ser : MovieService) { }

  ngOnInit() {
    this.getData();

  }

  getData() {
    if(this.typeService == 1)
    {
      this.$ser.GetData().subscribe(
      s => 
      {
        this.movies = s['results'];
        for (var m of this.movies)
        {
          m.backdrop_path = "https://image.tmdb.org/t/p/w1280"+m.backdrop_path;
          m.original_language = m.original_language.toUpperCase();
        }
      },
      error => {
        alert('error !!' + error.status);
        console.log(error);
      }

    );
    }
    else
    {
      this.$ser.GetData2().subscribe(
      s => 
      {
        this.movies = s['results'];
        for (var m of this.movies)
        {
          m.backdrop_path = "https://image.tmdb.org/t/p/w1280"+m.backdrop_path;
          m.original_language = m.original_language.toUpperCase();
        }
      },
      error => {
        alert('error !!' + error.status);
        console.log(error);
      }

    );
    }
  } 

}
