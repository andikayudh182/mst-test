// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Barang extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Barang.init({
//     kode: DataTypes.STRING,
//     nama: DataTypes.STRING,
//     harga: DataTypes.DECIMAL
//   }, {
//     sequelize,
//     timestamps:false,
//     freezeTableName:true,
//     modelName: 'Barang',
//   });
//   return Barang;
// };

const Sequelize = require('sequelize');
const db = require('../config/db.config.js');

const Barang = db.define('m_barang', {
  kode: {
    type: Sequelize.STRING
  },
  nama: {
    type: Sequelize.STRING
  },
  harga: {
    type: Sequelize.DECIMAL(10,2)
  },
},{
  freezeTableName: true,
  timestamps:false,
  modelName: 'm_barang'
})

module.exports = Barang;
