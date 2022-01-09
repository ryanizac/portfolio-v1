const express = require('express');
const { readFile } = require('./util.js');

const routes = express.Router();

routes.get('/', async (req, res) => {
    const file = readFile('../public/index.html');
    res.send(file);
});

routes.get('/about', async (req, res) => {
    const file = readFile('../public/about.html');
    res.send(file);
});

module.exports = routes;