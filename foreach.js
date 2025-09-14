const numbers = [1, 5, 6, 10, 45, 2, 7]
numbers.forEach(x => console.log(x));
numbers.forEach(num => {
    const doubled = num * 2;
    console.log(doubled)
})


/*
const users = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Chicago" },
    { id: 3, name: "Charlie", age: 22, city: "New York" },
    { id: 4, name: "David", age: 28, city: "Los Angeles" },
    { id: 5, name: "Eve", age: 35, city: "Chicago" }
];

Print each user’s name with their age in the format: "Alice is 25 years old".
*/ 
const users = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Chicago" },
    { id: 3, name: "Charlie", age: 22, city: "New York" },
    { id: 4, name: "David", age: 28, city: "Los Angeles" },
    { id: 5, name: "Eve", age: 35, city: "Chicago" }
];


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


let userInfo = users.map(user => {
    console.log(`${user.name} is ${user.age} years old.`);
});


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



