const numbers = [1, 5, 6, 10, 45, 2, 7]
// numbers.forEach(x => console.log(x));
numbers.forEach(num => {
    const doubled = num * 2;
    // console.log(doubled)
})


// Given [1, 2, 3, 4, 5], print each number multiplied by 3.
let numbersNewArr = [1, 2, 3, 4, 5];

let multipliedByThree = numbersNewArr.forEach(number => {
    console.log(number * 3)
});


// Given ["red", "green", "blue"], print each color in uppercase.
let colors = ["red", "green", "blue"];
let colorInUpperCase = colors.forEach(color => {
    console.log(color);
    
})


// Given [10, 20, 30], calculate the sum using forEach() (hint: create a variable outside and add inside).
let numbersForSum = [10, 20, 30];
let result = 0;
let sum = numbersForSum.forEach(num => result = result + num)
console.log(result);


// Given an array of strings (names), print each name with “Hello, “ in front. 
let names = ["cat", "dog", "elephant", "fish"];
let hell = "Hello";
let greetings = names.forEach(greet => console.log(`${hell}, ${greet}`)
);


// From an array of words, print the length of each word.
let lengthOfWords = names.forEach(word => {
    console.log(word.length);
    
});


/*
const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Phone", price: 800, inStock: false },
    { id: 3, name: "Tablet", price: 600, inStock: true },
    { id: 4, name: "Monitor", price: 300, inStock: true },
    { id: 5, name: "Keyboard", price: 100, inStock: false }
];
Print each product name with "Available" or "Out of stock" depending on its status.
*/
const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Phone", price: 800, inStock: false },
    { id: 3, name: "Tablet", price: 600, inStock: true },
    { id: 4, name: "Monitor", price: 300, inStock: true },
    { id: 5, name: "Keyboard", price: 100, inStock: false }
];
let availability = products.forEach(product => {
    if (product.inStock === true) {
        console.log(`${product.name} is Available`);
        
    } else {
        console.log(`${product.name} is Out of stock`);
        
    }
});


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
let userInfo = users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
});


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
    console.log(`Name: ${player.name} Goals ${player.goals} goals`);
})


