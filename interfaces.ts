interface Book {
    name: string;
    releaseYear: number;
    authors: Author[];
}

interface Author {
    firstName: string;
    lastName: string;
}

const book1: Book[] = [
    {
        name: "Harry Potter",
        releaseYear: 1996,
        authors: [
            {
                firstName: "J K",
                lastName: "Rowling",
            }
        ],
    },
    {
        name: "Harry Potter",
        releaseYear: 1996,
        authors: [
            {
                firstName: "J K",
                lastName: "Rowling",
            }
        ],
    }
]

// const book2: Book = {
//     name: "Narnia",
//     releaseYear: 1955,
//     author: "Lewis",
//     // year: 1955,
//     // genre: "Fantasy",
// }



interface Movie {
    name: string;
    releaseYear: number;
    country: string;
    actors: Actor[];
    genres: genre[];
}

interface Actor {
    firstName: string;
    lastName: string;
}

type genre = 'Accion' | 'Aventura' | 'Terror' | 'Romance' | 'Superheroes';


const movie: Movie = {
    name: "Avengers: Endgame",
    releaseYear: 2019,
    country: "Estados Unidos",
    actors: [
        {
            firstName: "Robert Downey ",
            lastName: "Jr"
        },
        {
            firstName: 'Christ',
            lastName: "Evan",
        },
        {
            firstName: "Andres",
            lastName: "Mendoza",
        }
    ],
    genres: ['Accion', 'Aventura', 'Superheroes']
}
