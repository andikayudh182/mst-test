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

        const options = {
            returning:true
        }

        try {
            const barang = await Barang.create({
                kode: req.body.kode,
                nama: req.body.nama,
                harga: req.body.harga
            },options)
            
            if (barang) {
                return res.status(200).send({
                    message:'add barang berhasil',
                    data: barang
                })
            }
        } catch (error) {
            return res.status(400).send({
                message:error.message
            })
        }
        

    }
}