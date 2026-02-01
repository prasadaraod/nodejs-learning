const fs = require('fs');

// 1. Create a readable stream
const reader = fs.createReadStream('big-file.txt',{ 'highWaterMark': 16*1024});

// 2. Create a writable stream
const writer = fs.createWriteStream('copy-of-big-file.txt');

// 3. The "pipe" method - The most efficent way to move data
reader.pipe(writer);

writer.on('finish',()=> {
    console.log("Finished writing the large file in chunks");
});

