const fs = require('fs');
const path = require('path');

const readFile = (...filePath) => {
    const pathMounted = path.join(__dirname, filePath.join('/'));
    const fileRead = fs.readFileSync(pathMounted, { encoding: 'utf-8' });
    return fileRead;
}

module.exports = {
    readFile
}