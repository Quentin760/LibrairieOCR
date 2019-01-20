import { Book } from "../models/Book";
import { Cd } from "../models/Cd";

export class Service {

    book: Book;
    cd: Cd;

    bookList: Book[] = [
        {
            name: 'La horde du contrevent',
            isLend: true
        },
        {
            name: 'Le Seigneur des anneaux',
            isLend: false
        },
        {
            name: 'Les Misérables',
            isLend: true
        },
        {
            name: 'Fondation',
            isLend: true
        },
        
    ];
    cdList: Cd[] = [
        {
            name: 'Rumours',
            isLend: true
        },
        {
            name: 'Thriller',
            isLend: false
        },
        {
            name: 'Irish Tour 74',
            isLend: true
        },
        
    ];

    onToggleMedia(item: any) {
        let CDOrBook = item;
		CDOrBook.isLend = !CDOrBook.isLend;
    }
}