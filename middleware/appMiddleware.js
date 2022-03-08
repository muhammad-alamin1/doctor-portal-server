const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const appMiddleware = [
    bodyParser.json(),
    cors(),
    express.static('public'),
];


module.exports = appMiddleware;