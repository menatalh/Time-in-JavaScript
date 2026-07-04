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
const dateStr = new Date("January 15, 2024");

const dateOnly = new Date("2024-01-15");
const unambiguous = new Date("2024-01-15T00:00:00+00:00");

// 4. Year, Month, Day ... Arguments
// January 15, 2024
const d = new Date(2024, 0, 15); // 0 = January!

// Full datetime: March 20, 2024 at 3:30:45 PM
const detailedDate = new Date(2024, 2, 20, 15, 30, 45);

const overflow = new Date(2024, 12, 1);
console.log(overflow);