const EventEmitter = require('events');

// create an instance of event emitter
const myEmitter = new EventEmitter();

// 1. Define a Listener
myEmitter.on('order-placed', (item,price)=>{
    console.log(`Notification: New Order for ${item} costing ${price}`);
});

// Trigger the event
console.log(`processing`);
myEmitter.emit('order-placed','Laptop',1300);

// Example of passing multiple data points
myEmitter.emit('order-placed','Keyboard',700);