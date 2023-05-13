const express = require('express');
const router = express.Router();
const db = require('../config/db.config.js');
const List = require('../models/List');

router.get('/', async (req, res) => {
  try {
    const list = await List.findAll()
    res.send(list)
  } catch(e){
    console.log(e)
  }
})

module.exports = router;
