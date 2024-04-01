const mongoose= require("mongoose")

const articleSchema= new mongoose.Schema({
    pname:{
        type:String
    },
    price:{
        type:String
    },
    cType:{
        type:String
    },
    
    desc:{
        type:String
    },
   
   
})

const article =  mongoose.model('article',articleSchema)

module.exports= article