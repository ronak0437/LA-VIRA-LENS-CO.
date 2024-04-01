const express = require("express")
const user_Route = express()

const user_Controller = require("../Controller/UserController.cjs")



user_Route.post("/register",user_Controller.addUser)
user_Route.get("/getAllUser",user_Controller.getUser)
user_Route.post("/login",user_Controller.login)

module.exports = user_Route