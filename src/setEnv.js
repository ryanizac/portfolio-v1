const dotenv = require('dotenv');
const path = require('path');

const envs = dotenv.config({
    path: path.resolve(__dirname, '../.env')
});

module.exports = envs.error || true;