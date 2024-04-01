const express = require("express")
const Article_Route = express()

const article_Controller = require("../Controller/ArticleController.cjs")



Article_Route.post("/addarticle",article_Controller.addArticle)
Article_Route.get("/getAllArticle",article_Controller.getArticle)
Article_Route.put("/editArticle/:id",article_Controller.updateArticle)
Article_Route.delete("/deleteArticle/:id",article_Controller.deleteArticle)

module.exports = Article_Route