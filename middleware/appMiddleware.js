const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const appMiddleware = [
    express.json(),
    express.urlencoded({ extended: true }),
    cookieParser()
];


module.exports = appMiddleware;