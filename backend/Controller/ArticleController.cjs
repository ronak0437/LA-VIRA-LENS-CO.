const Article = require("../Modal/ArticleModel.cjs")



//api 

//to post

const addArticle = async(req,res)=>{
    try {
        
        const article = new Article({...req.body},)
        const newArticle= await article.save()
        res.status(200).json({data:newArticle})

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}


const getArticle = async(req,res)=>{
    try {
        const getAllArticle = await Article.find()
        console.log(getAllArticle)
        res.status(200).json({status:200,data:getAllArticle})
        
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
        
    }
}

//update 

const updateArticle= async(req,res)=>{
    const {id}=req.params
    try {
        const editArticle = await Article.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.status(200).json({status:200,data:editArticle})
        
    } catch (error) {
        res.status(500).json({status:500,message:error.message})

        
    }
}

//delete 

const deleteArticle = async(req,res)=>{
    const {id}=req.params
    try {
        const deleteArticle = await Article.findByIdAndDelete({_id:id})
        res.status(200).json({status:200,message:"Deleted Succesfully"})
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
        
    }
}


module.exports={addArticle,getArticle,deleteArticle,updateArticle}