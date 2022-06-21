const Router = require("express").Router()

const controller = require('../../controllers/searchUserController')

// get users
Router.get('/users', controller.getUsers)

// find users
Router.get('/users/find', controller.findUsersName)

module.exports = Router