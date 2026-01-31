const fs = require('fs');

// Asynchronous Read
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Async Data:", data);
});

console.log("This will print BEFORE the file data!");