const numbers = [1, 5, 16, 10, 45, 2, 7]
const firstEven = numbers.find(x => x % 2 === 0)
// console.log(firstEven)

// const greaterThan50 = numbers.find( num => num > 50)
const greaterThan50 = numbers.find( num => num > 4)
console.log(greaterThan50);


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