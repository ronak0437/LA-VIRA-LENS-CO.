const express = require("express")
const Fav_Article_Route = express()

const fav_article_Controller = require("../Controller/FavoriteArticleController.cjs")



Fav_Article_Route.post("/addfavarticle",fav_article_Controller.addArticle)
Fav_Article_Route.get("/getAllfavArticle",fav_article_Controller.getArticle)


module.exports = Fav_Article_Route