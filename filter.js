const numbers = [1, 5, 16, 10, 45, 2, 7];

const greaterThan10 = numbers.filter(x => x > 10)
// const evenNumbers = numbers.filter(num => num % 2 === 0)
// console.log(evenNumbers);


/*
Given [1, 2, 3, 4, 5, 6], return only the even numbers.
→ Expected: [2, 4, 6]
*/ 
let NumbersArr = [1, 2, 3, 4, 5, 6];
let evenNumbers = NumbersArr.filter(num => num % 2 === 0);
console.log(evenNumbers);


/*
Given ["apple", "banana", "cherry", "date"], return only the words longer than 5 letters.
→ Expected: ["banana", "cherry"]
*/ 
let fruits = ["apple", "banana", "cherry", "date"];
let words = fruits.filter(fruit => fruit.length > 5);
console.log(words);


/*
Given [10, -5, 20, -15, 30], return only the positive numbers.
→ Expected: [10, 20, 30]
*/
let numerals = [10, -5, 20, -15, 30];
let positiveNumbers = numerals.filter(num => num > 0);
console.log(positiveNumbers);


/*
From an array of ages, return only the ages that are 18 or older. 
*/ 
const ages = [18, 58, 16, 10, 45, 28, 78, 10, 5, 20, 15, 30];
let olderAgesArr = ages.filter(age => age >= 18);
console.log(olderAgesArr);


/*
const users = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Chicago" },
    { id: 3, name: "Charlie", age: 22, city: "New York" },
    { id: 4, name: "David", age: 28, city: "Los Angeles" },
    { id: 5, name: "Eve", age: 35, city: "Chicago" }
];
Create a new array with only the users who live in Chicago.
*/ 
const users = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Chicago" },
    { id: 3, name: "Charlie", age: 22, city: "New York" },
    { id: 4, name: "David", age: 28, city: "Los Angeles" },
    { id: 5, name: "Eve", age: 35, city: "Chicago" }
];
const usersChicago = users.filter(user => user.city === "Chicago");
console.log(usersChicago);


/*
const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Phone", price: 800, inStock: false },
    { id: 3, name: "Tablet", price: 600, inStock: true },
    { id: 4, name: "Monitor", price: 300, inStock: true },
    { id: 5, name: "Keyboard", price: 100, inStock: false },
    { id: 6, name: "Headphones", price: 60, inStock: true }
];

From an array of products with prices, filter out only the products that cost more than 100.
Make a list of product names that are in stock.
*/ 
const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Phone", price: 800, inStock: false },
    { id: 3, name: "Tablet", price: 600, inStock: true },
    { id: 4, name: "Monitor", price: 300, inStock: true },
    { id: 5, name: "Keyboard", price: 100, inStock: false },
    { id: 6, name: "Headphones", price: 60, inStock: true }
];
let productsPrice = products.filter(product => product.price > 100);
console.log(productsPrice);

let stockProducts = products.filter(product => product.inStock === true);
console.log(stockProducts);


/*
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Pen", price: 2 }
];
Task: Return only the products that cost less than 100.

*/ 
const productsInfo = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Pen", price: 2 }
];
let productsPriceHundred = productsInfo.filter(product => product.price < 100)
console.log(productsPriceHundred);


/*
const cars = [
    { brand: "Toyota", year: 2018 },
    { brand: "Honda", year: 2020 },
    { brand: "Ford", year: 2015 }
];
Task: Get only the cars manufactured after 2017.

*/ 
const cars = [
    { brand: "Toyota", year: 2018 },
    { brand: "Honda", year: 2020 },
    { brand: "Ford", year: 2015 }
];
let carManufactured = cars.filter(car => car.year > 2017);
console.log(carManufactured);


/*
const courses = [
    { id: 1, title: "Math", completed: true },
    { id: 2, title: "English", completed: false },
    { id: 3, title: "Science", completed: true }
];
Task: Get only the titles of the courses that are completed.

*/ 
const courses = [
    { id: 1, title: "Math", completed: true },
    { id: 2, title: "English", completed: false },
    { id: 3, title: "Science", completed: true }
];
let CompleteCourseTitle = courses.filter(course => course.completed === true).map(course => course.title);
console.log(CompleteCourseTitle);
