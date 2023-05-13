const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const db = require('./config/db.config.js');
const cors_proxy = require('cors-anywhere');

dotenv.config();

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('error')) 

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS Anywhere setup
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port);

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/list', require('./routes/list'));

app.listen(port, host, () => console.log(`app running on ${host}:${port}`));
