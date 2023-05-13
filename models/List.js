const Sequelize = require('sequelize');
const db = require('../config/db.config.js');

const List = db.define('list', {
  name: {
    type: Sequelize.STRING
  },
})

module.exports = List;
