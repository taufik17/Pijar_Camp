const express = require('express')
const app = express()
const port = 8000
var bodyParser = require('body-parser')
const helmet = require("helmet");


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet());


// end of bottom code
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})