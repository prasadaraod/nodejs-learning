# Lesson 04: Event Emitter

### Theory: The Observer Patterrn
Nodejs is built on an **event-driven architecture** . This means that much of the core functionality is based on objects that emit named events which cause "Listener" functions to be executed.


### Key contepts
* **The Emitter**: The Object the signals that event has occured.(e.g : file downloading is finished)
* **The Listener**: The function that "listens" for that signal and executes a task in response.
* **Synchronous Execution**: By default `Event Emitter` calls all listeners synchronously in the order they registered.

### Core Methods
| Method | Description |
| :----- | :---------- |
| `.on(name,function)` | Registers a listener for the specified event. |
| `.emit(name,data)` | Synchronously calls each of the Listener Registered for the event. |
| `.once(name,function)` | Register a Listener event that called only once |


------ 