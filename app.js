const express = require('express');
const morgan = require('morgan');

const app = express();
require('./db');

const indexRouter = require('./routes');
const { cors, errorGeneralHandler, security } = require('./middleware');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "1kb" }));
app.use(cors);
app.use(security);

app.use('/api', indexRouter);

app.use(errorGeneralHandler);

module.exports = app;
