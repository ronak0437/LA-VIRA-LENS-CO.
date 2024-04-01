const mongoose=require("mongoose")

const DB= "mongodb+srv://Artera:Artera@artera.6vyep4q.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(()=>{
    console.log("Connection succesfull")
}).catch((err)=>console.log(err.message))

mongoose.exports= {mongoose}