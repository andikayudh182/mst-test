const {Pool} = require('pg')
require('dotenv').config()

// CREATE Pool Instance
const pool = new Pool ({
    user:process.env.PGUSER,
    host:process.env.PGHOST,
    database:process.env.PGDATABASE,
    password:process.env.PGPASSWPRD,
    port:process.env.PGUSER

})
// Exports Modul Query
module.exports = {
    async query(text, params){
        const start = Date.now()
        const result = await pool.query(text, params)
        const duration = Date.now() - start
        console.log(' Hasil Eksekusi Query :', {text, duration, rows: result.rowCount})
        return result  
    }
}