# 01. Node.js Architecture

### Theory
Node.js uses the **V8 Engine** and **Libuv**. It is single-threaded but handles concurrency via the Event Loop.



01. Node.js Architecture
The Concept
To understand Node.js, you must understand that it isn't a programming language; it's a runtime environment. It takes the Google V8 engine (the same one inside Chrome) and allows it to run on your machine instead of just inside a browser.

Key Components
V8 Engine: Converts JavaScript code into machine code that the computer can understand.

Libuv: A C++ library that handles the Event Loop and asynchronous operations (like reading files or network requests).

The Event Loop: This is the "secret sauce." It allows Node.js to be Non-blocking, meaning it can start a task, move to the next one, and come back when the first task is finished.