const Fav_Article = require("../Modal/FavoriteArticleModel.cjs")



//api 

//to post

const addArticle = async(req,res)=>{
    try {
        const fav_article = new Fav_Article({...req.body})
        const newFavArticle= await fav_article.save()
        res.status(200).json({data:newFavArticle})

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}


const getArticle = async(req,res)=>{
    try {
        const fav_Article = await Fav_Article.find()
        res.status(200).json({status:200,data:fav_Article})
        
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
        
    }
}



//delete 

// const deleteArticle = async(req,res)=>{
//     const {id}=req.params
//     try {
//         const deleteArticle = await Article.findByIdAndDelete({_id:id})
//         res.status(200).json({status:200,message:"Deleted Succesfully"})
//     } catch (error) {
//         res.status(500).json({status:500,message:error.message})
        
//     }
// }


module.exports={addArticle,getArticle}