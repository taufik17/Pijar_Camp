const Router = require("express").Router
const db = require('../db')

// get users
Router.get('/users', (req, res) => {
    db.query(`SELECT * FROM users INNER JOIN detail ON detail.id_user = users.id ORDER BY users.id ASC`, (error, results) => {
        if (error) {
            res.status(400).send("ada yang error")
        } else {
            res.send({ data: results?.rows, jumlahData: results.rowCount })
        }
    })
})

// find users
Router.get('/users/find', (req, res) => {
    const { nama } = req.body
    db.query(`SELECT * FROM users WHERE nama = $1`, [nama], (error, results) => {
        if (error) {
            res.status(400).send("ada yang error")
        } else {
            res.send({ data: results?.rows, jumlahData: results.rowCount })
        }
    })
})

// add users
Router.post('/users/add', (req, res) => {
    const { nama, email, job, education } = req.body
    db.query(
        `INSERT INTO users (nama, email) VALUES ($1, $2) RETURNING *`, [nama, email],
        (error, result) => {
            if (error) {
                res.status(400).send("ada yang error")
            } else {
                db.query(`INSERT INTO detail (job_title, education, id_user) VALUES ($1, $2, $3)`,
                    [job, education, result?.rows[0].id],
                    (error, result) => {
                        if (error) {
                            console.log(error)
                            res.status(400).send("ada yang error")
                        } else {
                            res.send("data berhasil ditambah")
                        }
                    })

            }
        }
    )
})

// edit users
Router.patch('/users/edit', (req, res) => {
    const { nama, email, id } = req.body

    if (id) {
        db.query(`SELECT * FROM users WHERE id = $1`, [id], (error, results) => {
            if (error) {
                res.status(400).send("ada yang error")
            } else {
                if (results.rowCount === 0) {
                    res.status(400).send("id tidak ditemukan")
                } else {
                    let inputNama = nama || results?.rows[0].nama
                    let inputEmail = email || results?.rows[0].email
                    let message = ""
                    if (nama) message += "nama, "
                    if (email) message += "email, "

                    db.query(
                        `UPDATE users SET nama = $1, email = $2 WHERE id = $3`, [inputNama, inputEmail, id],
                        (error, result) => {
                            if (error) {
                                console.log("error", error)
                                res.status(400).send("ada yang error")
                            } else {
                                res.send(`${message}berhasil diubah`)
                            }
                        }
                    )
                }
            }
        })
    } else {
        res.status(400).send("id ubah harus dikirim")
    }



})

// delete users
Router.delete('/users/delete', (req, res) => {
    const { id } = req.body

    if (id) {
        db.query(`SELECT * FROM users WHERE id = $1`, [id], (error, results) => {
            if (error) {
                res.status(400).send("ada yang error")
            } else {
                if (results.rowCount === 0) {
                    res.status(400).send("id tidak ditemukan")
                } else {
                    db.query(`DELETE FROM users WHERE id = $1`, [id], (error, results) => {
                        if (error) {
                            res.status(400).send("Ada yang error")
                        } else {
                            res.send("data berhasil dihapus")
                        }
                    })
                }
            }
        })
    } else {
        res.status(400).send("id ubah harus dikirim")
    }

})

module.exports = Router