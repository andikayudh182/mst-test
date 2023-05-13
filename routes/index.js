
const express = require('express');
const router = express.Router();
const db = require('../config/db.config.js');
const barangController = require('../controllers').barang



// const List = require('../models/List');
// const Barang = require('../models/barang');


// /* Endpoint Barang Controller*/
router.get('/api/barang', barangController.getAllBarang)
router.post('/api/barang', barangController.addBarang)



module.exports = router;
