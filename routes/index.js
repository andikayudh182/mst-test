var express = require('express');
var router = express.Router();

const barangController = require('../controllers').barang

/* Endpoint Barang Controller*/
router.get('/api/barang', barangController.getAllBarang)