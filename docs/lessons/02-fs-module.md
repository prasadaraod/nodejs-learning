# Lesson 02: Node.js File System (fs module)

## Theory: Sync vs Async

The fs module allows you to interact with the file system. In Node.js, almost every file operation has two versions:

Synchronous (readFileSync): Blocks the execution of the script until the file is read.

Asynchronous (readFile): Non-blocking; it uses a callback function to handle the data once it's ready.

# 02. File System (fs)

### Theory: Synchronous vs. Asynchronous
Node.js is famous for being non-blocking. The `fs` module demonstrates this perfectly:
* **Sync Methods**: Stops everything until the file is read. Good for simple scripts, bad for servers.
* **Async Methods**: Runs in the background and uses a callback. Best for performance.

### Practice Code
Create a file `code-samples/02-fs.js` and run it:
```javascript
const fs = require('fs');

// Asynchronous way (Recommended)
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});