// var express = require('express');
// var router = express.Router();

// const barangController = require('../controllers').barang

// /* Endpoint Barang Controller*/
// router.get('/api/barang', barangController.getAllBarang)

const express = require('express');
const router = express.Router();
const db = require('../config/db.config.js');
// const List = require('../models/List');
const Barang = require('../models/barang');

router.get('/', async (req, res) => {
  try {
    const barang = await Barang.findAll()
    res.status(200).send({
      message:'success',
      data:barang
    })
  } catch(e){
    res.send
  }
})

module.exports = router;
