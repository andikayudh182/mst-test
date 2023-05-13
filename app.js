const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const db = require('./config/db.config.js');

const corsAnywhere = require('cors-anywhere');

dotenv.config();

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('error')) 

const app = express();

app.get('/', (req, res) => res.send('running...'));

app.use('/list', require('./routes/list'));

// Gunakan cors-anywhere sebagai middleware
const corsProxy = corsAnywhere.create();
app.use(corsProxy);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('app running'))