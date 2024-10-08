const fs = require('fs');
const path = require('path');


fs.appendFile(
    path.join(__dirname, 'posts', 'blogPost.txt'),
    '\nMore Data', (err) => {
        if (err) {
            console.log("error in data addition");
            return;
        }

        console.log('file contents updated');
    }
);