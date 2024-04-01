const express = require("express")
const order_route = express()

const order_Controller = require("../Controller/OrderController.cjs")



order_route.post("/addOrder",order_Controller.addOrder)
order_route.get("/getAllOrder",order_Controller.getOrder)

module.exports = order_route