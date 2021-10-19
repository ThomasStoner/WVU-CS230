import { Component, OnInit } from "@angular/core";
import { list_movies } from "../moviesParts/list-movies";
import { MoviesService } from "../moviesParts/movie-list.service";
import { Movies } from "../moviesParts/movie.model";

var data = {
    movie1: {
        title: "",
        description: " ",
        imagePath: ""
    },

    movie2: {
        title: "",
        description: " ",
        imagePath: ""
    },
   
    movie3: {
        title: "",
        description: " ",
        imagePath: ""
    },
    
    movie4: {
        title: "",
        description: " ",
        imagePath: ""
    },
    
    movie5: {
        title: "",
        description: " ",
        imagePath: ""
    },
}
@Component({
    selector: 'app-movies',
    templateUrl: 'movies.component.html'
})

export class MoviesComponent implements OnInit{
    movies:Movies[] = [];

    constructor(private moviesService: MoviesService ) {
        
    }

    ngOnInit(): void {
        this.moviesService.getMovieList().subscribe((data: Movies) => {
            console.log(data);
            for (var movie of list_movies) {
                this.movies.push (new Movies(movie));
            }
        })
    }
}