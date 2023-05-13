const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const db = require('./config/db.config.js');
var indexRouter = require('./routes/index');

var cors = require('cors')
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers: Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization');
  
  next();
}




dotenv.config();

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('error')) 

const app = express();

// app.get('/', (req, res) => res.send('running...'));

// app.use('/list', require('./routes/list'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());
app.use(allowCrossDomain);
app.use('/', indexRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('app running'))
