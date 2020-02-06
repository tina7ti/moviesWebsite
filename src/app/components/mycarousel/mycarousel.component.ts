import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-mycarousel',
  templateUrl: './mycarousel.component.html',
  styleUrls: ['./mycarousel.component.scss']
})
export class MycarouselComponent implements OnInit {
  movies: Movie[];

  constructor(private $ser : MovieService) { }

  ngOnInit() {
    this.getData();

  }

  getData() {
    this.$ser.GetData().subscribe(
      s => 
      {
        this.movies = s['results'];
        for (var m of this.movies)
        {
          m.backdrop_path = "https://image.tmdb.org/t/p/w1280"+m.backdrop_path;
        }
      },
      error => {
        alert('error !!' + error.status);
        console.log(error);
      }

    );
  } 
}
