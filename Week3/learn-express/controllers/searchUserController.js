const model = require('../model/searchUserModel')

const getUsers = async (req, res) => {
    try {
        const getData = await model.getAllUser()
        res.send({ data: getData.rows, jumlahData: getData.rowCount })
    } catch (error) {
        res.status(400).send("ada yang error")
    }
}

// const getUsers = (req, res) => {
//     model.getAllUser()
//         .then((data) => {
//             res.send({ data: getData.rows, jumlahData: getData.rowCount })
//         })
//         .catch(() => {
//             res.status(400).send("ada yang error")
//         })
// }

const findUsersName = async (req, res) => {
    try {
        const { nama } = req.body
        const getData = await model.getByName(nama)

        res.send({
            data: getData.rows,
            jumlahData: getData.rowCount
        })
    } catch (error) {
        res.status(400).send("ada yang error")
    }


}

module.exports = { getUsers, findUsersName }