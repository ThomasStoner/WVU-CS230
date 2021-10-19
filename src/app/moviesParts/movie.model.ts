

export class Movies
{
    title: string;
    description: string;
    imagePath: string;

    constructor({title, description, imagePath} :
        {title:string, description:string, imagePath:string}) {
            this.title = title;
            this.description = description;
            this.imagePath = imagePath;

    }
}