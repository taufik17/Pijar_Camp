const Postgre = require("pg").Pool
const connection = new Postgre({
    user: "taufi",
    host: "localhost",
    database: "express_postgres",
    password: "admin",
    port: 5432
})

module.exports = connection