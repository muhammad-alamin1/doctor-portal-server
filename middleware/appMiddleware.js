const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const appMiddleware = [
    cors(),
    express.json(),
    express.urlencoded({ extended: true }),
    cookieParser()
];


module.exports = appMiddleware;