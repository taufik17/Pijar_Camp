const db = require('../db')

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users INNER JOIN detail ON detail.id_user = users.id ORDER BY users.id ASC`,
            (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
    })
}

const getByName = (nama) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users WHERE nama = $1`, [nama], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

module.exports = { getAllUser, getByName }