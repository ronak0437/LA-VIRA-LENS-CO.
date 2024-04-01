const mongoose = require("mongoose")

const favarticleSchema = new mongoose.Schema({
    // title:{
    //     type:String
    // },
    // subtitle:{
    //     type:String
    // },
    // content:{
    //     type:String
    // },
    // u_id:{
    //     type:Number
    // },
    data: {
        type: Object
    }

})

const favarticle = mongoose.model('favarticle', favarticleSchema)

module.exports = favarticle