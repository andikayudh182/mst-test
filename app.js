const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const db = require('./config/db.config.js');

dotenv.config();

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('error')) 

const app = express();

app.get('/', (req, res) => res.send('running...'));

app.use('/list', require('./routes/list'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('app running'))
