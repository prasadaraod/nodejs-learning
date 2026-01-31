# Lesson 02: Node.js File System (fs module)

## Theory: Sync vs Async

The fs module allows you to interact with the file system. In Node.js, almost every file operation has two versions:

Synchronous (readFileSync): Blocks the execution of the script until the file is read.

Asynchronous (readFile): Non-blocking; it uses a callback function to handle the data once it's ready.