const express = require('express')
const app = express()
const port = 8000
var bodyParser = require('body-parser')
const helmet = require("helmet");
const searchRoutes = require('./routes/users/searchUsersRoutes')
const userRoutes = require('./routes/users/usersRoutes')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet());

app.use("/", searchRoutes)
app.use("/", userRoutes)

// end of bottom code
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})