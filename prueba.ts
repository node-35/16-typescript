let student: string = "Camilo";

student = "10";

let a: number = 10;

let b: number = 5;

let result: number = a + b;

type age = number | string;

let age1: age = "10";

age1 = 20;


type sizeType = 'S' | 'M' | 'L' | 'XL';


let size: sizeType = "L";
size = "M";

let size2: sizeType = "M";





type color = 'Azul' | 'Amarillo' | 'Rojo' | 'Verde' | 'Purpura';

const color1: color = 'Rojo';

const color2: color = 'Purpura';



// const users: Array<string> = ['Santiago', 'Dulfary', 'Jean Carlos', 'jfdklsa'];

const users: string[] = ['Santiago', 'Dulfary', 'Jean Carlos', 'jfdklsa'];
const colors: color[] = ['Amarillo', 'Azul', 'Purpura'];


type userType = [string, number, string];

const user: userType = ['Dulfary', 25, 'Ingeniería informática'];
const user1: userType = ['Dulfary', 25, 'Ingeniería informática'];
const user2: userType = ['Dulfary', 25, 'Ingeniería informática'];


const countries: string[] = ["Colombia", "Mexico", "Argentina", "Venezuela", "Peru"];
