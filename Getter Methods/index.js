// Getter Methods
const date = new Date('2024-01-15T03:00:00Z'); // 3 AM UTC

// Local Getter Methods(Based on machine's timezone)
date.getFullYear(); // 2024
date.getMonth(); // 0 (January)
date.getDate(); // 15
date.getDay(); // 1 (Monday)
date.getHours(); // 3
date.getMinutes(); // 0
date.getSeconds(); // 0
date.getMilliseconds(); // 0
date.getTime(); // 1705256400000 (milliseconds since epoch Jan 1, 1970)

// UTC Getter Methods
date.getUTCFullYear(); // 2024
date.getUTCMonth(); // 0 (January)
date.getUTCDate(); // 15
date.getUTCDay(); // 1 (Monday)
date.getUTCHours(); // 3
date.getUTCMinutes(); // 0
date.getUTCSeconds(); // 0
date.getUTCMilliseconds(); // 0