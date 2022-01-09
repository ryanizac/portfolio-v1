const express = require('express');
const routes = require('./routes.js');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use(express.static('public'));
server.use(routes);

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})