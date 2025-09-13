const numbers = [1, 2, 3, 4, 5, 6, 7, 12, 45];
/*
let sum = 0;
for (const num of numbers) {
    sum += num;
}
console.log(sum);
*/ 

const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);

