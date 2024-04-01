const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    First_Name:{
        type:String
    },
    Last_Name:{
        type:String
    },
    Email:{
        type:String
    },
    Phoneno:{
        type:Number
    },
    Message:{
        type:String
    }
})

const contact =  mongoose.model('contact',userSchema)

module.exports= contact