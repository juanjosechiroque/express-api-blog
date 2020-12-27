#!/usr/bin/env node

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();  
}

const app = require('../app.js');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
  console.log('Enviroment', process.env.NODE_ENV);
});
