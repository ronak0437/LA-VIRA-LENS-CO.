const express = require('express')
const app = express()


const mongoose = require("mongoose")

const cors = require("cors")
require('./config/DbConnection.cjs')

const PORT = 8080

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + "/public"));


const user_route = require("./Routes/userRoute.cjs")

app.use('/api',user_route)


const product_route = require("./Routes/ProductRoute.cjs")

app.use('/api',product_route)

const Contact_route = require("./Routes/ContactUsRoute.cjs")
app.use('/api',Contact_route)

const order_Route = require("./Routes/OrderRoute.cjs")
app.use('/api',order_Route)

const article_Route = require("./Routes/ArticleRoute.cjs")
app.use('/api',article_Route)

const fav_article_Route = require("./Routes/FavoriteArticle.cjs")
app.use('/api',fav_article_Route)

app.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`)
})

