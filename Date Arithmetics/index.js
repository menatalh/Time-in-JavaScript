// Date Arithmetics
const MS = {
    SECOND: 1_000,
    MINUTE: 1_000 * 60, //60,000
    HOUR: 1_000 * 60 * 60, // 3,600,000
    DAY: 1_000 * 60 * 60 * 24,  // 86,400,000
}

const today = new Date();
today.setTime(today.getTime() + MS.DAY * 7); // Add 7 days to today

function addDays(date, days) {
    const result = new Date(date);
    result.setTime(result.getTime() + MS.DAY * days);
    return result;
}

// Difference Between Dates
const start = new Date("2024-01-01");
const end = new Date("2024-12-31");
const diffMs = end - start; // 31,449,600,000 milliseconds

const diffDays = Math.floor(diffMs/MS.DAY);

// Age Calculator

function calculateAge(birthday) {
    const now = new Date();
    const birthdayDate = new Date(birthday)
    const diffMs = now - birthdayDate;
    return Math.floor(diffMs / (MS.DAY * 365));
}