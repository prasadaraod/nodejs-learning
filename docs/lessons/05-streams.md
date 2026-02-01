# Streams & Buffers

### Theory : Processing Large Data
In Node.js, Streams are best ways to reading or writing files, network communications, or any kind of end to end information exchange in an efficient way.

* **Buffer**: A Temporary "waiting area" (a small chunck of memory) for data being moved from one place to another place 
* **Stream**: Instead of reading a 1GB of data all at once (Which would crash your app), Streams read file chunk by chunk. 

| Stream Type | Description | Example |
| :---------  | :---------- | :------ |
| **Readable** | used to read Data | fs.createReadStream() |
| **Writable** | used to write Data | fs.createWriteStream() |
| **Duplex**   | can both read and write | Network Sockets |
| **Transform** | can modify data as it is read/write | Gzip compression |