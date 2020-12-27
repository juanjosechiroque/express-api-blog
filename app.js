const express = require('express');
const morgan = require('morgan');

const app = express();
require('./db');

const indexRouter = require('./routes');
const { cors, errorGeneralHandler } = require('./middleware');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors);

app.use('/api', indexRouter);

app.use(errorGeneralHandler);

module.exports = app;
