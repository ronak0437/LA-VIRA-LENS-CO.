const mongoose =require("mongoose")

const productSchema = new mongoose.Schema({
    pname:{
        type:String
    },
    desc:{
        type:String
    },
    ptype:{
        type:String
    },
    price:{
        type:String
    },
   

})

const product= mongoose.model('product',productSchema)

module.exports=product;