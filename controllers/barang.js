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
                message:'Get all data mahasiswa berhasil',
                data: barang
            })
        } catch (error) {
            return res.status(400).send({
                message: error.message
            })
        }
    }
}