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

app.get('/', (req, res) => res.send('running...'));

app.use('/list', require('./routes/list'));

// Activate CORS proxy using cors-anywhere
cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(process.env.PORT || 8080, () => {
  console.log(`CORS proxy running on port ${process.env.PORT || 8080}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`app running on port ${PORT}`));