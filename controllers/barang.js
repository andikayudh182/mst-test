const Barang = require('../models/barang')

module.exports = {
    async getAllBarang(req, res) {
        try {
            const barang = await Barang.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt','id']
                },
                order: [
                    ['kode', 'ASC']
                ]
            })
            
            if (barang.length == 0) {
                return res.status(400).send({
                    message:'Data barang tidak ada'
                })
            }

            return res.status(200).send({
                message:'Get all data barang berhasil',
                data: barang
            })
        } catch (error) {
            return res.status(400).send({
                message: error.message
            })
        }
    },

    async addBarang(req, res) {
      
        const data = req.body;

        // pastikan bahwa objek `data` tidak kosong
        if (!data) {
          return res.status(400).send({
            message: 'Data barang tidak ditemukan.',
          });
        }
      
        // pastikan bahwa properti `kode` ada pada objek `data`
        if (!data.kode) {
          return res.status(400).send({
            message: 'Kode barang harus diisi.',
          });
        }
      
        // pastikan bahwa properti `nama` ada pada objek `data`
        if (!data.nama) {
          return res.status(400).send({
            message: 'Nama barang harus diisi.',
          });
        }
      
        // pastikan bahwa properti `harga` ada pada objek `data`
        if (!data.harga) {
          return res.status(400).send({
            message: 'Harga barang harus diisi.',
          });
        }
      
      
        try {
          const barang = await Barang.create(
            {
              kode: data.kode,
              nama: data.nama,
              harga: data.harga,
            },
          );
      
          if (barang) {
            return res.status(200).send({
              message: 'Add barang berhasil',
              data: barang,
            });
          }
        } catch (error) {
          return res.status(400).send({
            message: error.message,
          });
        }
    }
    
}