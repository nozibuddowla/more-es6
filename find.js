const numbers = [1, 5, 16, 10, 45, 2, 7]
const firstEven = numbers.find(x => x % 2 === 0)
// console.log(firstEven)

// const greaterThan50 = numbers.find( num => num > 50)
const greaterThan50 = numbers.find( num => num > 4)
console.log(greaterThan50);


// From an array of numbers, find the first number that is divisible by 7. 
let divisibleBySeven = numbers.find(num => num % 7 === 0);
console.log(divisibleBySeven);


/*
Given [3, 7, 12, 19, 21], find the first number greater than 10.
→ Expected: 12
*/ 
let numbersNew = [3, 7, 12, 19, 21];
let firstNumGreaterThanTen = numbersNew.find(number => number > 10);
console.log(firstNumGreaterThanTen);


/*
Given ["cat", "dog", "elephant", "fish"], find the first word with more than 3 letters.
→ Expected: "elephant"
*/
let fishes = ["cat", "dog", "elephant", "fish"];
let wordMoreThanThreeChar = fishes.find(fish => fish.length > 3);
console.log(wordMoreThanThreeChar);


/*
Given [1, 2, 3, 4, 5], find the first odd number.
→ Expected: 1
*/ 
let numbersNewArr = [1, 2, 3, 4, 5];
let oddNumbers = numbersNewArr.find(number => number % 2 !== 0);
console.log(oddNumbers);


/*
const users = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Chicago" },
    { id: 3, name: "Charlie", age: 22, city: "New York" },
    { id: 4, name: "David", age: 28, city: "Los Angeles" },
    { id: 5, name: "Eve", age: 35, city: "Chicago" }
];
Find the user whose id is 3.
*/
const users = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Chicago" },
    { id: 3, name: "Charlie", age: 22, city: "New York" },
    { id: 4, name: "David", age: 28, city: "Los Angeles" },
    { id: 5, name: "Eve", age: 35, city: "Chicago" }
];
let userId = users.find(user => user.id === 3);
console.log(userId);


/*
const students = [
    { id: 1, name: "David", grade: "A" },
    { id: 2, name: "Eve", grade: "C" },
    { id: 3, name: "Frank", grade: "B" }
];
Task: Find the first student whose grade is "B".
*/ 
const students = [
    { id: 1, name: "David", grade: "A" },
    { id: 2, name: "Eve", grade: "C" },
    { id: 3, name: "Frank", grade: "B" }
];
let firstStudentGetB = students.find(student => student.grade === "B");
console.log(firstStudentGetB);


/*
const movies = [
    { id: 1, title: "Inception", rating: 8.8 },
    { id: 2, title: "The Room", rating: 3.6 },
    { id: 3, title: "Interstellar", rating: 8.6 }
];
Task: Find the first movie that has a rating below 5.
*/ 
const movies = [
    { id: 1, title: "Inception", rating: 8.8 },
    { id: 2, title: "The Room", rating: 3.6 },
    { id: 3, title: "Interstellar", rating: 8.6 }
];
let ratingBelowFive = movies.find(movie => movie.rating < 5);
console.log(ratingBelowFive);
