const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/posts'), (err) => {
    if (err) {
        console.log(err);
        console.log("Folder with that name already exists");
        return;
    }
    console.log('post folder created!');
});