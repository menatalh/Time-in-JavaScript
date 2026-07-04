// Setter Methods
const date = new Date('2024-01-15T12:00:00Z');
console.log(date.toISOString()); // 2024-01-15T12:00:00.000Z

date.setFullYear(2025); // 2025-01-15T12:00:00.000Z

// All the setter methods
date.setMonth(5); // 2025-06-15T12:00:00.000Z (June)
date.setDate(20); // 2025-06-20T12:00:00.000Z
date.setHours(18); // 2025-06-20T15:00:00.000Z
date.setMinutes(30); // 2025-06-20T15:30:00.000Z
date.setSeconds(0); // 2025-06-20T15:30:45.000Z
date.setMilliseconds(0); // 2025-06-20T15:30:45.000Z
date.setTime(170532000000); // set entire timestamp

// UTC Setter Methods
date.setUTCFullYear(2026);
date.setUTCMonth(11);
date.setUTCDate(25);
date.setUTCHours(10);
date.setUTCMinutes(15);
date.setUTCSeconds(30);
date.setUTCMilliseconds(500);

// Avoid mutation - Always clone your date object

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days); // Mutates the original!
    return result;
}

const original = new Date('2024-01-15');
const future =addDays(original, 7);

console.log(original.toDateString()); // Jan 15 -- Not Mutated
console.log(future.toDateString()); // Jan 22

const date = new Date('2024-12-25'); // Christmas

console.log(date.getMonth()); // 11
console.log(date.getMonth() + 1); // 12 (December)

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"  
];

console.log(MONTHS[date.getMonth()]); // December

function getTodayComponents() {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
    }
}