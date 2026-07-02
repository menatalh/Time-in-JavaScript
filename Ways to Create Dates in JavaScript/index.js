// 1. Create Date
console.log("JavaScript Date & Time");

const now = new Date();

console.log(now);
console.log(now.getTime());

console.log(Date.now());

// 2. Create Date
const d1 = new Date(170532000000);
const d2 = new Date(170532000000);
console.log(d1 === d2); // false, we're comparing the references of different objects in memory

d1.getTime() === d2.getTime(); // true, we're comparing the values of the two dates

// 3. Date String
const d3 = new Date("2024-01-15");