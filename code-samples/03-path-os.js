const path = require('path');
const os = require('os');

// --- PATH PRACTICE ---
const filename = path.join(__dirname, 'data', 'test.txt');
console.log("Safe Path for this OS:", filename);
console.log("File Extension:", path.extname(filename));

// --- OS PRACTICE ---
console.log("Operating System:", os.type());
console.log("Free Memory:", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("CPU Cores:", os.cpus().length);