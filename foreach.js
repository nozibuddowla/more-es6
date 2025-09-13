const numbers = [1, 5, 6, 10, 45, 2, 7]
numbers.forEach(x => console.log(x));
numbers.forEach(num => {
    const doubled = num * 2;
    console.log(doubled)
})


/*
const books = [
    { title: "Book One", pages: 200 },
    { title: "Book Two", pages: 150 },
    { title: "Book Three", pages: 300 }
];
Task: Print each book title with its page count.
*/ 
const books = [
    { title: "Book One", pages: 200 },
    { title: "Book Two", pages: 150 },
    { title: "Book Three", pages: 300 }
];
let bookInfo = books.forEach(book => {
    console.log(`Title: ${book.title} - ${book.pages} pages.`);
})


/*
const players = [
    { name: "Messi", goals: 30 },
    { name: "Ronaldo", goals: 25 },
    { name: "Neymar", goals: 20 }
];
Task: Print each player's name with the number of goals they scored.
*/ 
const players = [
    { name: "Messi", goals: 30 },
    { name: "Ronaldo", goals: 25 },
    { name: "Neymar", goals: 20 }
];
let playersNewArray = players.forEach(player => {
    console.log(`Name: ${player.name}, Goals: ${player.goals}`);
})