
const express = require('express');
const router = express.Router();
const db = require('../config/db.config.js');
const barangController = require('../controllers').barang

// /* Endpoint Barang Controller*/

// const List = require('../models/List');
// const Barang = require('../models/barang');



router.get('/api/barang', barangController.getAllBarang)



module.exports = router;
