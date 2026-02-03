# Lesson 02: Node.js File System (fs module)

## Theory: Sync vs Async


Node.js is famous for being non-blocking. The `fs` module demonstrates this perfectly.
The fs module allows you to interact with the file system. In Node.js, almost every file operation has two versions:

### Theory: Synchronous vs. Asynchronous
Node.js is famous for being non-blocking. The `fs` module demonstrates this perfectly:
* **Sync Methods**: Stops everything until the file is read. Good for simple scripts, bad for servers.
* **Async Methods**: Runs in the background and uses a callback. Best for performance.

