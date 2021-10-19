import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Movies } from "./movie.model"

@Injectable({providedIn: 'root'})
export class MoviesService {
    
    private baseUrl: string = 'https://shudder-app-actual-default-rtdb.firebaseio.com/';
    private endpoint : string = "movieList.json"
    constructor(private http: HttpClient) {
    }

    getMovieList() {
        console.log(this.baseUrl + this.endpoint);
        return this.http.get<Movies>(this.baseUrl + this.endpoint);
    }
 }