const fs = require('fs');
// fs.writeFile('sample.txt', "Hello ", (err) => console.log('content updated'));
// fs.appendFile('sample.txt', "Ancyyyy", (err) => console.log('content updated'));
// fs.readFile('sample.txt', "utf-8", (err, data) => console.log(data));
const path = require('path');
const { PassThrough } = require('stream');
fs.writeFile(path.join(__dirname, 'posts', 'blogPost.txt'), 'Hello', (err) => {
    if (err) {
        throw err;
    }
    console.log('file Created!')
})