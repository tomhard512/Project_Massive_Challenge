const db = require('../config/db')


const createCheckout = (checkoutData, callback) => {
    const {user_id, produk_id, jumlah, status} = checkoutData
    const query = 'INSERT INTO checkouts (user_id, produk_id, jumlah, status) VALUES (?, ?, ?, ?)'
    db.query(query, [user_id, produk_id, jumlah, status], (err, result) => {
        if(err) {
            return callback(err, null)
        }

        return callback(null, result)
    })
}

module.exports = {createCheckout};