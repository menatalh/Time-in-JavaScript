// In the US DST starts on the second Sunday in March at 2AM skipping to 3AM
// It ends in November(first Sunday of November, 2AM, repeating 1am to 1:59am)

const skip = new Date(2026, 2, 10, 2, 30, 0);
skip.getHours(); // 3

// JavaScript can't distinguish between these two 1:30 AMs