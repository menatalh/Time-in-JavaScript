// validated Parsed Date

const bad = new Date("not-a-date");
console.log(bad); // Invalid Date
console.log(isNaN(bad)); // true

function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}

function parseDate(dateString) {
    if (!dateString) return null;
    const date = new Date(dateString);
    return isValidDate(date) ? date : null;
}