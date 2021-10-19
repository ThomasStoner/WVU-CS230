import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-movie-cards',
    templateUrl: 'movie-cards.component.html'
})

export class MovieCardsComponent{
    @Input()
    title! :string;
    @Input()
    description! : string;
    @Input()
    imagePath! : string;

}