// Get the current date and time
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// Get the day of the week
let dayOfWeek = currentDate.getDay();
console.log("Day of the Week (6-Saturday):", dayOfWeek);

// Set the year to a specific value
let specificYear = 2024;
currentDate.setFullYear(specificYear);
console.log("Date after setting the year to", specificYear, ":", currentDate);