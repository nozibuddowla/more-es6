// const numbers = [4, 16, 8, 6, 2, 3, 4, 5, 8];

// const doubled = [];
// for (const num of numbers) {
//     const result = num * 2;
//     doubled.push(result);
// }
// console.log(doubled);

// const double = x => x * 2;
// const doubleIt = numbers.map(double);
// console.log(doubleIt);

// const doubleIt = numbers.map(x => x * 2);
// console.log(doubleIt);

// const fiveTimes = numbers.map(num => num * 5);
// const squared = numbers.map(num => num * num);
// console.log(fiveTimes);
// console.log(squared);

const friends = ['Zaved', 'Pavel', 'Nobel', 'Kodbel', "Zoshim", "Said", "Reza", "Ujjal", "Nayeem"];
const nameLengths = friends.map(name => name.length);
// console.log(nameLengths);

const firstLetters = friends.map(name => name[0].toLowerCase());
// console.log(firstLetters);
const lastLetters = friends.map(name => name.slice(-1).toUpperCase());
// console.log(lastLetters);

// const result = numbers.map((num, index) => {
//     console.log(`num = ${num}`);
//     console.log(`${num} * 3 = ${num * 3}`);
//     console.log(`${num} * ${index} = ${num * index}`)
//     return index;
// })

// console.log(result)



/*
Given [1, 2, 3, 4], return a new array where each number is doubled.
→ Expected: [2, 4, 6, 8]
*/
let numbers = [1, 2, 3, 4];
let newArr = numbers.map(num => num * 2);
console.log(newArr);


/*
Given ["alice", "bob", "charlie"], return a new array with each name capitalized (first letter uppercase).
→ Expected: ["Alice", "Bob", "Charlie"]
*/ 
let names = ["alice", "bob", "", null, "charlie"];

// let capitalizeArr = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));

let capitalizeArr = names.map(name => {
    if (typeof name !== "string" || name.trim() === "" ) {
        return name;
    } else {
        let cleanName = name.trim();
        return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    }
})
console.log(capitalizeArr);


/*
Given [5, 10, 15], return a new array with the squares of each number.
→ Expected: [25, 100, 225]
*/ 
let squareNumbers = [5, 10, 15];
let square = squareNumbers.map(num => num * num);
console.log(square);


/*
Given an array of temperatures in Celsius, create a new array with the values converted to Fahrenheit.
*/
let temperatures  = [4, 16, 8, 6, 2, 3, 5, 8, 1, 10, 15, 25, 100, 225];
let fahrenheit = temperatures.map(celsius => (celsius * 9/5) + 32);
console.log(fahrenheit);


/*
const users = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Chicago" },
    { id: 3, name: "Charlie", age: 22, city: "New York" },
    { id: 4, name: "David", age: 28, city: "Los Angeles" },
    { id: 5, name: "Eve", age: 35, city: "Chicago" }
];
Get an array of all user names.

Print each user’s name with their age in the format: "Alice is 25 years old".
*/ 
const users = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Chicago" },
    { id: 3, name: "Charlie", age: 22, city: "New York" },
    { id: 4, name: "David", age: 28, city: "Los Angeles" },
    { id: 5, name: "Eve", age: 35, city: "Chicago" }
];
let userNames = users.map(user => user.name);
console.log(userNames);

let userInfo = users.map(user => {
    console.log(`${user.name} is ${user.age} years old.`);
});


/*
const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 25 }
];
Task: Get only the names from the users array.
*/ 
const usersObj = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 25 }
];
let userName = usersObj.map(user => user.name);
console.log(userName);


/*
const employees = [
    { id: 1, name: "Sam", salary: 5000 },
    { id: 2, name: "John", salary: 7000 },
    { id: 3, name: "Sara", salary: 4000 }
];
Task: Create a new array of employee names with their salaries increased by 10%.
*/ 

const employees = [
    { id: 1, name: "Sam", salary: 5000 },
    { id: 2, name: "John", salary: 7000 },
    { id: 3, name: "Sara", salary: 4000 }
];
let employeesNewArr = employees.map(employee => ({
    fullName: employee.name,
    newSalary: employee.salary * (1 + 10/100)
}))
console.log(employeesNewArr);


/*
const orders = [
    { id: 1, total: 250 },
    { id: 2, total: 400 },
    { id: 3, total: 150 }
];
Task: Create a new array containing only the total amounts from the orders.
*/ 

const orders = [
    { id: 1, total: 250 },
    { id: 2, total: 400 },
    { id: 3, total: 150 }
];
let ordersNewArray = orders.map(order => order.total);
console.log(ordersNewArray);
