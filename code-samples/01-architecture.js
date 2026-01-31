console.log("1. Starting the script");

// This is an asynchronous operation (handled by Libuv)
setTimeout(() => {
    console.log("2. Inside the timer (2 seconds later)");
}, 2000);

console.log("3. Ending the script");

/** * EXPECTED OUTPUT:
 * 1. Starting the script
 * 3. Ending the script
 * 2. Inside the timer (after 2 seconds)
 * * Notice how '3' prints before '2' because Node didn't wait!
 */