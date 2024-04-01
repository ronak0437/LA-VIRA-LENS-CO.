const express = require("express")
const product_route = express()
const product_controller = require('../Controller/ProductController.cjs')




product_route.post("/addProduct",product_controller.addProduct)
product_route.get("/getAllProduct",product_controller.getProduct)
product_route.get("/getProduct/:id",product_controller.getIndProduct)
product_route.put("/editProduct/:id",product_controller.updateProduct)
product_route.delete("/deleteProduct/:id",product_controller.deleteProduct)



module.exports=product_route



